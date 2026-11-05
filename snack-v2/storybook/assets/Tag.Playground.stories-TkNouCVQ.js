import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-CH0ThVYh.js";import{i as c,o as l,s as u,t as d}from"./src-BVorpc9b.js";import{n as f,t as p}from"./testIds-DA06BtbK.js";var m,h,g,_,v,y,b,x;e((()=>{d(),o(),f(),m=t(),{expect:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Data display/Tag/Tag`,id:`components-tag-tag`,component:c,parameters:{layout:`fullscreen`},render:({tooltipText:e,...t})=>(0,m.jsx)(r,{children:(0,m.jsxs)(a,{children:[(0,m.jsx)(i,{children:`Playground`}),(0,m.jsx)(n,{children:`Тег-метка с настройкой размера и цветовой схемы appearance.`}),(0,m.jsx)(s,{align:`center`,children:(0,m.jsx)(c,{...t,...e?{tooltip:{tip:e}}:{}})})]})}),args:{label:`Tag`,size:u.Xs,appearance:l.Neutral,tooltipText:``,"data-test-id":p.tag.root},argTypes:{tooltip:{table:{disable:!0}},tooltipText:{name:`[Stories]: tooltip text`,control:`text`},size:{control:`select`,options:Object.values(u)},appearance:{control:`select`,options:Object.values(l)}}},y={tags:[`dev`,`test`],play:async({canvasElement:e})=>{await h(_(e).getByTestId(p.tag.root)).toBeVisible()}},b={args:{tooltipText:`Подсказка к тегу`},play:async({canvasElement:e})=>{await g.hover(_(e).getByTestId(p.tag.root)),await h(await _(e.ownerDocument.body).findByRole(`tooltip`)).toHaveTextContent(`Подсказка к тегу`)}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.tag.root)).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipText: 'Подсказка к тегу'
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.hover(within(canvasElement).getByTestId(TEST_IDS.tag.root));
    await expect(await within(canvasElement.ownerDocument.body).findByRole('tooltip')).toHaveTextContent('Подсказка к тегу');
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`WithTooltip`]}))();export{y as Playground,b as WithTooltip,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Tag.Playground.stories-TkNouCVQ.js.map