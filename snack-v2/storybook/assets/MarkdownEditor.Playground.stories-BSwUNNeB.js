import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,f as i,l as a,m as o,t as s,u as c}from"./iframe-C96OK3Oq.js";import{n as l,s as u,t as d}from"./src-BtCzpRhu.js";import{n as f,t as p}from"./testIds-F77ZMRyH.js";var m,h,g,_,v,y,b,x,S;e((()=>{d(),s(),f(),m=t(),{expect:h,fn:g,within:_}=__STORYBOOK_MODULE_TEST__,v=`# Hello editor

Параграф с **жирным**, *курсивом* и \`inline code\`.

- one
- two
`,y=Object.values(u),b={title:`Snack/Inputs & Forms/Markdown/MarkdownEditor`,id:`components-markdown-markdowneditor`,component:l,parameters:{layout:`fullscreen`},args:{defaultValue:v,placeholder:`Начните писать…`,defaultPreview:!0,label:`Markdown field`,previewLabel:`Preview`,hideHeader:!1,spellCheck:!0,toolbar:y,onChange:g(),onPreviewChange:g(),"data-test-id":p.editor},argTypes:{toolbar:{control:`select`,options:[`full`,`minimal`,`inline-only`,`hidden`],mapping:{full:y,minimal:[u.Bold,u.Italic,u.Link,u.BulletList],"inline-only":[u.Bold,u.Italic,u.Strikethrough,u.InlineCode],hidden:!1}},preview:{table:{disable:!0}},onChange:{table:{disable:!0}},onPreviewChange:{table:{disable:!0}},value:{table:{disable:!0}},className:{table:{disable:!0}},"data-test-id":{table:{disable:!0}}},render:e=>(0,m.jsx)(c,{children:(0,m.jsxs)(r,{width:`wide`,children:[(0,m.jsx)(o,{children:`MarkdownEditor`}),(0,m.jsx)(a,{children:`WYSIWYG-редактор markdown с тулбаром и preview-тоглом.`}),(0,m.jsx)(n,{align:`start`,children:(0,m.jsx)(i,{width:`fit`,children:(0,m.jsx)(l,{...e})})})]})})},x={tags:[`dev`,`test`],play:async({canvasElement:e})=>{let t=_(e).getByTestId(p.editor);await h(t).toBeVisible()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement).getByTestId(TEST_IDS.editor);
    await expect(root).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`]}))();export{x as Playground,S as __namedExportsOrder,b as default};
//# sourceMappingURL=MarkdownEditor.Playground.stories-BSwUNNeB.js.map