import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DQTa2Tvz.js";import{s as c,t as l}from"./src-Ck6oG8TU.js";import{c as u,t as d}from"./src-Dsv0ppaz.js";import{M as f,i as p,j as m,n as h,t as g}from"./src-CIioHw5b.js";var _,v,y,b,x,S,C,w,T,E;e((()=>{d(),l(),g(),o(),f(),_=t(),{expect:v,fn:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C=[{id:`1`,content:{label:`Production`}},{id:`2`,content:{label:`Staging`}}],w={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldSelectCreate/Tests/Interaction`,id:`uikit-product-fieldspredefined-fieldselectcreate-tests-interaction`,component:h,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{submitHandler:y(async()=>void 0)}},T={tags:[`test`,`dev`],render:e=>(0,_.jsx)(s,{children:(0,_.jsxs)(r,{width:`narrow`,children:[(0,_.jsx)(a,{children:`InteractionTest`}),(0,_.jsx)(i,{children:`Клик по «Создать» открывает форму создания; подтверждение вызывает submitHandler.`}),(0,_.jsx)(n,{block:!0,children:(0,_.jsx)(h,{...e,entityName:{single:`Окружение`,plural:`Окружения`},selectProps:{label:`Окружение`,items:C},createLayoutType:p.Modal,createLayoutProps:{title:`Создание окружения`,content:(0,_.jsx)(u,{label:`Название`})}})})]})}),play:async({args:e,canvasElement:t,step:n})=>{let r=S(t),i=S(document.body);await n(`click: «Создать» под полем открывает модалку`,async()=>{await b.click(r.getByTestId(m.fieldSelectCreateButton)),await x(()=>v(i.getByTestId(c.body)).toBeVisible())}),await n(`submit: подтверждение вызывает submitHandler`,async()=>{await b.click(i.getByTestId(c.footerApprove)),await x(()=>v(e.submitHandler).toHaveBeenCalledTimes(1))})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: args => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>InteractionTest</DemoTitle>
        <DemoHint>Клик по «Создать» открывает форму создания; подтверждение вызывает submitHandler.</DemoHint>
        <DemoActions block>
          <FieldSelectCreate {...args} entityName={{
          single: 'Окружение',
          plural: 'Окружения'
        }} selectProps={{
          label: 'Окружение',
          items: ITEMS
        }} createLayoutType={CREATE_LAYOUT_TYPE.Modal} createLayoutProps={{
          title: 'Создание окружения',
          content: <FieldText label='Название' />
        }} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await step('click: «Создать» под полем открывает модалку', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.fieldSelectCreateButton));
      await waitFor(() => expect(body.getByTestId(MODAL_TEST_IDS.body)).toBeVisible());
    });
    await step('submit: подтверждение вызывает submitHandler', async () => {
      await userEvent.click(body.getByTestId(MODAL_TEST_IDS.footerApprove));
      await waitFor(() => expect(args.submitHandler).toHaveBeenCalledTimes(1));
    });
  }
}`,...T.parameters?.docs?.source}}},E=[`InteractionTest`]}))();export{T as InteractionTest,E as __namedExportsOrder,w as default};
//# sourceMappingURL=FieldSelectCreate.InteractionTest.stories-BnRl4EsR.js.map