import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,i as r,ot as i,t as a,wn as o}from"./iframe-qs8RgOhH.js";import{n as s,t as c}from"./src-Dscv5pAD2.js";import{o as l,r as u}from"./testIds-BYUpXbkv.js";import{n as d,t as f}from"./styles.module-BLI8_pKO.js";import{i as p,n as m,r as h,s as g,v as _}from"./demoData-CHiwTFmp.js";var v,y,b,x,S,C,w,T;e((()=>{i(),c(),u(),a(),_(),f(),v=t(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Layout & containers/PageLayout/PageForm`,id:`uikit-product-pagelayout-pageform`,component:l,parameters:{layout:`padded`,controls:{disable:!0}}},x=(0,v.jsx)(s,{steps:[{title:`Конфигурация`},{title:`Сеть и доступ`},{title:`Подтверждение`}],defaultCurrentStepIndex:1,children:({stepper:e})=>e}),S={total:`12 000 ₽ / мес`,content:(0,v.jsx)(g,{})},C={buttonPrimary:{variant:`create`,onClick:y()},buttonSecondary:{variant:`cancel`,onClick:y()}},w={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,v.jsxs)(`div`,{className:d.matrix,children:[(0,v.jsx)(r,{sectionTitle:`layout`,firstColumnHeader:`layout`,columnHeaders:[``],rows:[{variantLabel:`with side items`,cells:[(0,v.jsx)(`div`,{className:d.deviceForm,children:(0,v.jsx)(n,{layoutType:o.Desktop,children:(0,v.jsx)(l,{title:`Создание инстанса`,subtitle:`Заполните параметры конфигурации`,stepper:x,priceSummary:S,sideBlock:[{label:`Справка`,content:(0,v.jsx)(h,{})}],footer:C,children:(0,v.jsx)(p,{})})})},`adv`)]},{variantLabel:`sticky footer`,cells:[(0,v.jsx)(`div`,{className:d.deviceFormScroll,children:(0,v.jsx)(n,{layoutType:o.Desktop,children:(0,v.jsx)(l,{title:`Создание инстанса`,subtitle:`Заполните параметры конфигурации`,stepper:x,footer:C,stickyFooter:!0,children:(0,v.jsx)(p,{})})})},`sticky`)]},{variantLabel:`plain form`,cells:[(0,v.jsx)(`div`,{className:d.deviceForm,children:(0,v.jsx)(n,{layoutType:o.Desktop,children:(0,v.jsx)(l,{title:`Создание инстанса`,subtitle:`Заполните параметры конфигурации`,stepper:x,footer:C,children:(0,v.jsx)(p,{})})})},`reg`)]}]}),(0,v.jsx)(r,{sectionTitle:`layoutType`,firstColumnHeader:`layoutType`,columnHeaders:[``],rows:[{variantLabel:`mobile`,cells:[(0,v.jsx)(`div`,{className:d.deviceMobile,children:(0,v.jsx)(n,{layoutType:o.Mobile,children:(0,v.jsx)(l,{title:`Создание инстанса`,priceSummary:S,footer:C,children:(0,v.jsx)(m,{})})})},`m`)]}]})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='layout' firstColumnHeader='layout' columnHeaders={['']} rows={[{
      variantLabel: 'with side items',
      cells: [<div key='adv' className={styles.deviceForm}>
                <LayoutScope layoutType={LAYOUT_TYPE.Desktop}>
                  <PageForm title='Создание инстанса' subtitle='Заполните параметры конфигурации' stepper={stepper} priceSummary={priceSummary} sideBlock={[{
            label: 'Справка',
            content: <FormHelp />
          }]} footer={footer}>
                    <FormSections />
                  </PageForm>
                </LayoutScope>
              </div>]
    }, {
      variantLabel: 'sticky footer',
      cells: [
      // Фрейм со своим скроллом: только в нём футер прилипает и показывает разделитель.
      <div key='sticky' className={styles.deviceFormScroll}>
                <LayoutScope layoutType={LAYOUT_TYPE.Desktop}>
                  <PageForm title='Создание инстанса' subtitle='Заполните параметры конфигурации' stepper={stepper} footer={footer} stickyFooter>
                    <FormSections />
                  </PageForm>
                </LayoutScope>
              </div>]
    }, {
      variantLabel: 'plain form',
      cells: [<div key='reg' className={styles.deviceForm}>
                <LayoutScope layoutType={LAYOUT_TYPE.Desktop}>
                  <PageForm title='Создание инстанса' subtitle='Заполните параметры конфигурации' stepper={stepper} footer={footer}>
                    <FormSections />
                  </PageForm>
                </LayoutScope>
              </div>]
    }]} />

      <StoryTable sectionTitle='layoutType' firstColumnHeader='layoutType' columnHeaders={['']} rows={[{
      variantLabel: 'mobile',
      cells: [<div key='m' className={styles.deviceMobile}>
                <LayoutScope layoutType={LAYOUT_TYPE.Mobile}>
                  <PageForm title='Создание инстанса' priceSummary={priceSummary} footer={footer}>
                    <FormFields />
                  </PageForm>
                </LayoutScope>
              </div>]
    }]} />
    </div>
}`,...w.parameters?.docs?.source}}},T=[`VisualMatrix`]}))();export{w as VisualMatrix,T as __namedExportsOrder,b as default};
//# sourceMappingURL=PageForm.VisualMatrix.stories-BhoLVFWw.js.map