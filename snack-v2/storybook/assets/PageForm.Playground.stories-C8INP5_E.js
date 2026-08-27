import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./src-DX1c3Z3V.js";import{n as i,t as a}from"./src-D8kQb5qH.js";import{n as o,t as s}from"./src-Es2WY3SN2.js";import{n as c,o as l,r as u,t as d}from"./testIds-ClvbYSuB.js";import{n as f,t as p}from"./styles.module-FkmQtAFp.js";import{n as m,r as h,s as g,v as _}from"./demoData-kh-GSiGt.js";var v,y,b,x,S,C,w,T,E;e((()=>{a(),s(),r(),u(),_(),p(),c(),v=t(),{expect:y,fn:b,within:x}=__STORYBOOK_MODULE_TEST__,S=(0,v.jsx)(o,{steps:[{title:`Конфигурация`},{title:`Сеть и доступ`},{title:`Подтверждение`}],defaultCurrentStepIndex:1,children:({stepper:e})=>e}),C=(0,v.jsxs)(`div`,{className:f.formAccordions,children:[(0,v.jsx)(i,{expandedDefault:`basics`,children:(0,v.jsx)(i.CollapseBlockPrimary,{view:`outline`,id:`basics`,title:`Основные параметры`,subTitle:`Имя, регион и конфигурация инстанса`,afterTitle:(0,v.jsx)(n,{tip:`Эти параметры можно изменить после остановки инстанса`}),children:(0,v.jsx)(m,{})})}),(0,v.jsx)(i,{children:(0,v.jsx)(i.CollapseBlockPrimary,{view:`outline`,id:`network`,title:`Сеть`,subTitle:`Подсеть, публичный IP и группы безопасности`,children:(0,v.jsx)(m,{})})})]}),w={title:`Uikit Product/Layout/PageLayout/PageForm`,id:`uikit-product-pagelayout-pageform`,component:l,parameters:{layout:`fullscreen`},args:{title:`Создание инстанса`,subtitle:`Заполните параметры конфигурации`,stepper:S,priceSummary:{total:`12 000 ₽ / мес`,content:(0,v.jsx)(g,{})},sideBlock:[{label:`Справка`,content:(0,v.jsx)(h,{})}],footer:{buttonPrimary:{variant:`create`,onClick:b()},buttonSecondary:{variant:`cancel`,onClick:b()}},children:C,"data-test-id":d.pageForm.root,showSubtitle:!0,showStepper:!0,showPriceSummary:!0,showSideBlock:!0,showFooter:!0},argTypes:{priceSummary:{table:{disable:!0}},sideBlock:{table:{disable:!0}},footer:{table:{disable:!0}},stepper:{table:{disable:!0}},children:{table:{disable:!0}},showSubtitle:{name:`[Stories]: showSubtitle`,control:`boolean`},showStepper:{name:`[Stories]: showStepper`,control:`boolean`},showPriceSummary:{name:`[Stories]: showPriceSummary`,control:`boolean`},showSideBlock:{name:`[Stories]: showSideBlock`,control:`boolean`},showFooter:{name:`[Stories]: showFooter`,control:`boolean`}}},T={args:{stickyFooter:!1},tags:[`dev`,`test`],render:({showSubtitle:e,showStepper:t,showPriceSummary:n,showSideBlock:r,showFooter:i,...a})=>(0,v.jsx)(`div`,{className:f.fullPage,children:(0,v.jsx)(l,{...a,subtitle:e?a.subtitle:void 0,stepper:t?a.stepper:void 0,priceSummary:n?a.priceSummary:void 0,sideBlock:r?a.sideBlock:void 0,footer:i?a.footer:void 0})}),play:async({canvasElement:e})=>{await y(x(e).getByTestId(d.pageForm.root)).toBeVisible()}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    stickyFooter: false
  },
  tags: ['dev', 'test'],
  render: ({
    showSubtitle,
    showStepper,
    showPriceSummary,
    showSideBlock,
    showFooter,
    ...args
  }) => <div className={styles.fullPage}>
      <PageForm {...args} subtitle={showSubtitle ? args.subtitle : undefined} stepper={showStepper ? args.stepper : undefined} priceSummary={showPriceSummary ? args.priceSummary : undefined} sideBlock={showSideBlock ? args.sideBlock : undefined} footer={showFooter ? args.footer : undefined} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pageForm.root)).toBeVisible();
  }
}`,...T.parameters?.docs?.source}}},E=[`Playground`]}))();export{T as Playground,E as __namedExportsOrder,w as default};
//# sourceMappingURL=PageForm.Playground.stories-C8INP5_E.js.map