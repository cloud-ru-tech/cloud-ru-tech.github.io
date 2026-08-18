import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-Du0zU9lI.js";import{s as u,t as d}from"./src-DwSodzal.js";import{p as f,t as p}from"./src-DgKz5k1f.js";import{c as m,d as h,i as g,n as _,p as v,r as y,s as b,t as x,u as S}from"./styles.module-sq7yD8tY.js";import{t as C}from"./testIds-v8yZYLp6.js";function w(e){let[t,n]=(0,E.useState)(e.value??[]);return(0,D.jsx)(l,{children:(0,D.jsxs)(a,{children:[(0,D.jsx)(s,{children:`InteractionTest`}),(0,D.jsx)(o,{children:`Выбор файла валидирует его и рендерит вложение; неподдерживаемый формат даёт вложение с ошибкой; удаление убирает вложение.`}),(0,D.jsx)(i,{align:`center`,children:(0,D.jsx)(`div`,{className:_.uploadFilesStory,children:(0,D.jsx)(h,{...e,value:t,onChange:t=>{n(t),e.onChange?.(t)}})})})]})})}function T(e,t){let n=new DataTransfer;for(let e of t)n.items.add(e);Object.defineProperty(e,"files",{configurable:!0,value:n.files}),e.dispatchEvent(new Event(`change`,{bubbles:!0}))}var E,D,O,k,A,j,M,N,P,F;t((()=>{d(),p(),S(),E=e(n(),1),c(),b(),x(),C(),D=r(),{expect:O,fn:k,userEvent:A,waitFor:j,within:M}=__STORYBOOK_MODULE_TEST__,N={title:`Uikit Product/Inputs & Forms/UploadFiles/Tests/Interaction`,id:`uikit-product-uploadfiles-tests-interaction`,component:h,globals:{language:`ru-RU`},parameters:{layout:`fullscreen`,controls:{disable:!0}},render:e=>(0,D.jsx)(w,{...e}),args:{...g,accept:y,"data-test-id":v.root,onChange:k(),upload:m}},P={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{e.onChange.mockClear();let r=M(t),i=r.getByTestId(f.dropzone.nativeInput);await n(`selecting a valid file calls onChange and renders an attachment`,async()=>{T(i,[new File([`pdf`],`report.pdf`,{type:`application/pdf`})]),O(e.onChange).toHaveBeenCalled(),await j(()=>O(r.getAllByTestId(v.attachment).length).toBeGreaterThan(0))}),await n(`selecting an unsupported format renders an attachment with an error`,async()=>{T(i,[new File([`jpg`],`photo.jpg`,{type:`image/jpeg`})]),await j(()=>{let e=r.getAllByTestId(v.attachment).filter(e=>e.getAttribute(`data-attachment-error`)===`true`);O(e.length).toBeGreaterThan(0)})}),await n(`deleting an attachment removes it`,async()=>{let e=r.getAllByTestId(v.attachment).length,t=r.getAllByTestId(u.deleteAction);await A.click(t[t.length-1]),await j(()=>O(r.getAllByTestId(v.attachment).length).toBe(e-1))})}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    (args.onChange as ReturnType<typeof fn>).mockClear();
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(DROPZONE_TEST_IDS.dropzone.nativeInput) as HTMLInputElement;
    await step('selecting a valid file calls onChange and renders an attachment', async () => {
      fireFileSelect(input, [new File(['pdf'], 'report.pdf', {
        type: 'application/pdf'
      })]);
      expect(args.onChange).toHaveBeenCalled();
      await waitFor(() => expect(canvas.getAllByTestId(TEST_IDS.attachment).length).toBeGreaterThan(0));
    });
    await step('selecting an unsupported format renders an attachment with an error', async () => {
      fireFileSelect(input, [new File(['jpg'], 'photo.jpg', {
        type: 'image/jpeg'
      })]);
      await waitFor(() => {
        const errored = canvas.getAllByTestId(TEST_IDS.attachment).filter(el => el.getAttribute('data-attachment-error') === 'true');
        expect(errored.length).toBeGreaterThan(0);
      });
    });
    await step('deleting an attachment removes it', async () => {
      const before = canvas.getAllByTestId(TEST_IDS.attachment).length;
      const deleteButtons = canvas.getAllByTestId(ATTACHMENT_TEST_IDS.deleteAction);
      await userEvent.click(deleteButtons[deleteButtons.length - 1]);
      await waitFor(() => expect(canvas.getAllByTestId(TEST_IDS.attachment).length).toBe(before - 1));
    });
  }
}`,...P.parameters?.docs?.source}}},F=[`InteractionTest`]}))();export{P as InteractionTest,F as __namedExportsOrder,N as default};
//# sourceMappingURL=UploadFiles.InteractionTest.stories-B1zv-wMj.js.map