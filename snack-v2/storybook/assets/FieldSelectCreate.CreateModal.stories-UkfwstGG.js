import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-n9OCAA8q.js";import{s as u,t as d}from"./src-Bo_UII9q.js";import{c as f,t as p}from"./src-Lpv0lgCB.js";import{M as m,i as h,j as g,n as _,t as v}from"./src-BOFG23qc.js";function y(){let[e,t]=(0,b.useState)([{id:`1`,content:{label:`Production`}},{id:`2`,content:{label:`Staging`}}]),[n,r]=(0,b.useState)(),[c,u]=(0,b.useState)(``);return(0,x.jsx)(l,{children:(0,x.jsxs)(a,{width:`narrow`,children:[(0,x.jsx)(s,{children:`CreateModal`}),(0,x.jsx)(o,{children:`Форма создания открывается в модалке. После подтверждения новая опция добавляется в список и выбирается.`}),(0,x.jsx)(i,{block:!0,children:(0,x.jsx)(_,{entityName:{single:`Окружение`,plural:`Окружения`},selectProps:{label:`Окружение`,items:e,value:n,onChange:r},createLayoutType:h.Modal,createLayoutProps:{title:`Создание окружения`,content:(0,x.jsx)(f,{label:`Название`,value:c,onChange:u})},submitHandler:()=>{let n=String(e.length+1);return t(e=>[...e,{id:n,content:{label:c.trim()||`Окружение ${n}`}}]),u(``),Promise.resolve(n)}})})]})})}var b,x,S,C,w,T,E,D,O;t((()=>{p(),d(),v(),b=e(n(),1),c(),m(),x=r(),{expect:S,userEvent:C,waitFor:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Uikit Product/Inputs & Forms/FieldsPredefined/FieldSelectCreate/Examples/CreateModal`,id:`uikit-product-fieldspredefined-fieldselectcreate-examples-createmodal`,component:_,parameters:{layout:`fullscreen`,controls:{disable:!0}}},D={tags:[`dev`,`test`],render:()=>(0,x.jsx)(y,{}),play:async({canvasElement:e,step:t})=>{let n=T(e),r=T(document.body);await t(`click: «Создать» открывает модалку с формой`,async()=>{await C.click(n.getByTestId(g.fieldSelectCreateButton)),await w(()=>S(r.getByTestId(u.body)).toBeVisible())}),await t(`submit: подтверждение формы закрывает модалку`,async()=>{await C.click(r.getByTestId(u.footerApprove)),await w(()=>S(r.queryByTestId(u.body)).not.toBeInTheDocument())})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <CreateModalDemo />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    await step('click: «Создать» открывает модалку с формой', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.fieldSelectCreateButton));
      await waitFor(() => expect(body.getByTestId(MODAL_TEST_IDS.body)).toBeVisible());
    });
    await step('submit: подтверждение формы закрывает модалку', async () => {
      await userEvent.click(body.getByTestId(MODAL_TEST_IDS.footerApprove));
      await waitFor(() => expect(body.queryByTestId(MODAL_TEST_IDS.body)).not.toBeInTheDocument());
    });
  }
}`,...D.parameters?.docs?.source}}},O=[`CreateModal`]}))();export{D as CreateModal,O as __namedExportsOrder,E as default};
//# sourceMappingURL=FieldSelectCreate.CreateModal.stories-UkfwstGG.js.map