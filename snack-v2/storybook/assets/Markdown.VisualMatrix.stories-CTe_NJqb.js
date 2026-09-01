import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-B2mzxEaG.js";import{i,t as a}from"./src-BZuvqmfJ.js";var o,s,c,l=e((()=>{o=`_matrix_ysum1_4`,s=`_cell_ysum1_9`,c={matrix:o,cell:s}})),u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{a(),r(),l(),u=t(),d={title:`Snack/Inputs & Forms/Markdown/Markdown`,id:`components-markdown-markdown`,component:i,parameters:{layout:`padded`}},f=`# H1
## H2
### H3
#### H4
##### H5

Параграф с **жирным**, *курсивом*, ~~зачёркнутым~~ и \`inline code\`.
`,p=`- bullet один
- bullet два
  - вложенный
  - ещё вложенный

1. ordered один
2. ordered два
   1. вложенный ordered
`,m=`> Цитата с **форматированием**.
>
> > Вложенная цитата.
`,h=`\`\`\`ts
export function add(a: number, b: number): number {
  return a + b
}

const xs = [1, 2, 3].map(x => x * 2)
\`\`\`
`,g=`| Col A | Col B | Col C |
|-------|-------|-------|
| one   | two   | three |
| four  | five  | six   |
`,_=`[Snack Ui Kit](https://example.com)

![alt text](/fixtures/placeholder-80x40.svg)

---

Над разделителем — текст, под — следующий блок.

Следующий параграф.
`,v=`Обычный markdown.

<div style="padding: 8px; background: rgba(0,0,0,0.06); border-radius: 4px">
  <strong>Raw HTML</strong> блок.
</div>

После HTML.
`,y=[{key:`typography`,value:f},{key:`lists`,value:p},{key:`blockquote`,value:m},{key:`code-block`,value:h},{key:`table (GFM)`,value:g},{key:`links + image + hr`,value:_}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{className:c.matrix,children:[(0,u.jsx)(n,{sectionTitle:`Содержимое`,firstColumnHeader:`Block`,columnHeaders:[`Render`],rows:y.map(({key:e,value:t})=>({variantLabel:e,cells:[(0,u.jsx)(i,{value:t},e)]}))}),(0,u.jsx)(n,{sectionTitle:`skipHtml`,firstColumnHeader:`value`,columnHeaders:[`Render`],rows:[{variantLabel:`skipHtml=true (по умолчанию)`,cells:[(0,u.jsx)(i,{value:v,skipHtml:!0},`skip`)]},{variantLabel:`skipHtml=false`,cells:[(0,u.jsx)(i,{value:v,skipHtml:!1},`keep`)]}]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Содержимое' firstColumnHeader='Block' columnHeaders={['Render']} rows={sections.map(({
      key,
      value
    }) => ({
      variantLabel: key,
      cells: [<Markdown key={key} value={value} />]
    }))} />

      <StoryTable sectionTitle='skipHtml' firstColumnHeader='value' columnHeaders={['Render']} rows={[{
      variantLabel: 'skipHtml=true (по умолчанию)',
      cells: [<Markdown key='skip' value={RAW_HTML} skipHtml />]
    }, {
      variantLabel: 'skipHtml=false',
      cells: [<Markdown key='keep' value={RAW_HTML} skipHtml={false} />]
    }]} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,d as default};
//# sourceMappingURL=Markdown.VisualMatrix.stories-CTe_NJqb.js.map