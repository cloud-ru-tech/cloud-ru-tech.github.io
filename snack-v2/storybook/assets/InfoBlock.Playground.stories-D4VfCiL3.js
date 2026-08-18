import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-Du0zU9lI.js";import{V as c,t as l}from"./system-B3b9qWhT.js";import{a as u,t as d,u as f}from"./src-Bq_MVxXk.js";import{a as p,i as m,n as h,o as g,s as _,t as v}from"./src-xWU_syNQ.js";import{n as y,t as b}from"./styles.module-C7_PwLGH.js";var x=e((()=>{_()})),S,C,w,T;e((()=>{d(),l(),o(),v(),b(),x(),S=t(),C={title:`Snack/Data display/InfoBlock`,id:`components-infoblock`,component:h,parameters:{layout:`fullscreen`},args:{"data-test-id":g.root,title:`Title text`,content:`Content text`,size:p.S,align:m.Vertical,showIcon:!0,showFooter:!0,icon:{icon:c,appearance:`primary`,background:!0}},argTypes:{title:{control:`text`,description:`Заголовок`},content:{control:`text`,description:`Подзаголовок`},size:{control:`select`,options:Object.values(p),description:`Размер`},align:{control:`radio`,options:Object.values(m),description:`Расположение элементов`},showIcon:{control:`boolean`,description:`Показать иконку`},showFooter:{control:`boolean`,description:`Показать футер с кнопками`},icon:{table:{disable:!0},description:`Иконка (IconPredefined props)`,if:{arg:`showIcon`,eq:!0}},className:{control:`text`,description:`Дополнительный CSS-класс`}}},w={tags:[`dev`,`test`],render:e=>(0,S.jsx)(s,{children:(0,S.jsxs)(r,{children:[(0,S.jsx)(a,{children:`Playground`}),(0,S.jsx)(i,{children:`Информационный блок с заголовком, описанием, иконкой и футером.`}),(0,S.jsx)(n,{align:`center`,children:(0,S.jsx)(h,{title:e.title,content:e.content,size:e.size,align:e.align,icon:e.showIcon?e.icon:void 0,footer:e.showFooter?(0,S.jsxs)(`div`,{className:y.footerRow,children:[(0,S.jsx)(u,{label:`Label text`,view:f.Filled,size:e.size}),(0,S.jsx)(u,{label:`Label text`,view:f.Tonal,size:e.size})]}):void 0,className:e.className,"data-test-id":e[`data-test-id`]})})]})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Информационный блок с заголовком, описанием, иконкой и футером.</DemoHint>
        <DemoActions align='center'>
          <InfoBlock title={args.title} content={args.content} size={args.size} align={args.align} icon={args.showIcon ? args.icon : undefined} footer={args.showFooter ? <div className={styles.footerRow}>
                  <Button label='Label text' view={VIEW.Filled} size={args.size} />
                  <Button label='Label text' view={VIEW.Tonal} size={args.size} />
                </div> : undefined} className={args.className} data-test-id={args['data-test-id']} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...w.parameters?.docs?.source}}},T=[`Playground`]}))();export{w as Playground,T as __namedExportsOrder,C as default};
//# sourceMappingURL=InfoBlock.Playground.stories-D4VfCiL3.js.map