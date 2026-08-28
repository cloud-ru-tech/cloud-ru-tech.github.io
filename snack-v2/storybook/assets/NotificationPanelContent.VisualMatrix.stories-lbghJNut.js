import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{bn as n,gn as r,i,nt as a,t as o}from"./iframe-CSZ3Qkp5.js";import{F as s,Zt as c,t as l}from"./system-Ci65Gbsg.js";import{f as u,i as d,t as f,u as p}from"./src-IUIJA0BI2.js";import{n as m,t as h}from"./fixtures-5bfJgWXu.js";import{n as g,t as _}from"./styles.module-B4-CNFbL.js";var v,y,b,x,S,C,w;e((()=>{a(),l(),f(),o(),m(),_(),v=t(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Feedback/Notification/NotificationPanelContent`,id:`uikit-product-notification-notificationpanelcontent`,component:d,parameters:{layout:`padded`}},x=e=>(0,v.jsx)(`div`,{className:g.container,children:e}),S=(0,v.jsx)(d,{title:`Уведомления`,content:h,readAllButton:{label:`Прочитать всё`,onClick:y()},segments:{items:[{value:`all`,label:`Все`},{value:`unread`,label:`Непрочитанные`}],value:`all`,onChange:y()},chipToggle:{label:`Только важные`,checked:!0,onChange:y()},settings:{button:{onClick:y()},actions:[{content:{label:`Настройки`},onClick:y()}]}}),C={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,v.jsxs)(`div`,{className:g.matrix,children:[(0,v.jsx)(i,{sectionTitle:`State`,firstColumnHeader:`State`,columnHeaders:[`view`],rows:[{variantLabel:`default (with cards)`,cells:[x((0,v.jsx)(d,{title:`Уведомления`,content:h}))]},{variantLabel:`loading`,cells:[x((0,v.jsx)(d,{title:`Уведомления`,loading:!0,skeletonsAmount:3}))]},{variantLabel:`blank`,cells:[x((0,v.jsx)(d,{title:`Уведомления`,content:(0,v.jsx)(d.Blank,{icon:{icon:s,appearance:`neutral`},title:`Нет уведомлений`,content:`Здесь будут новые события`})}))]},{variantLabel:`error`,cells:[x((0,v.jsx)(d,{title:`Уведомления`,content:(0,v.jsx)(d.Blank,{icon:{icon:c,appearance:`neutral`},title:`Не удалось загрузить`,content:`Попробуйте позже`})}))]}]}),(0,v.jsx)(i,{sectionTitle:`Slots`,firstColumnHeader:`Slot`,columnHeaders:[`view`],rows:[{variantLabel:`with readAll + footer`,cells:[x((0,v.jsx)(d,{title:`Уведомления`,content:h,readAllButton:{label:`Прочитать всё`,onClick:y()}}))]},{variantLabel:`with filters (segments + chipToggle + settings)`,cells:[x((0,v.jsx)(d,{title:`Уведомления`,content:h,segments:{items:[{value:`all`,label:`Все`},{value:`unread`,label:`Непрочитанные`}],value:`all`,onChange:y()},chipToggle:{label:`Только важные`,checked:!0,onChange:y()},settings:{button:{onClick:y()},actions:[{content:{label:`Настройки`},onClick:y()}]}}))]},{variantLabel:`with group`,cells:[x((0,v.jsx)(d,{title:`Уведомления`,content:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(d.Group,{title:`Backup`,children:(0,v.jsx)(p,{id:`g1`,title:`Бэкап завершён`,description:`prod-1`,date:`14:32`,appearance:u.Success})})})}))]}]}),(0,v.jsx)(i,{sectionTitle:`Adaptive layout (desktop × mobile)`,firstColumnHeader:`layoutType`,columnHeaders:[`view`],rows:[{variantLabel:`desktop`,cells:[(0,v.jsx)(r,{layoutType:n.Desktop,children:x(S)},`content-desktop`)]},{variantLabel:`mobile`,cells:[(0,v.jsx)(r,{layoutType:n.Mobile,children:x(S)},`content-mobile`)]}]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='State' firstColumnHeader='State' columnHeaders={['view']} rows={[{
      variantLabel: 'default (with cards)',
      cells: [wrap(<NotificationPanelContent title='Уведомления' content={SAMPLE_CARDS} />)]
    }, {
      variantLabel: 'loading',
      cells: [wrap(<NotificationPanelContent title='Уведомления' loading skeletonsAmount={3} />)]
    }, {
      variantLabel: 'blank',
      cells: [wrap(<NotificationPanelContent title='Уведомления' content={<NotificationPanelContent.Blank icon={{
        icon: SearchSVG,
        appearance: 'neutral'
      }} title='Нет уведомлений' content='Здесь будут новые события' />} />)]
    }, {
      variantLabel: 'error',
      cells: [wrap(<NotificationPanelContent title='Уведомления' content={<NotificationPanelContent.Blank icon={{
        icon: CrossSVG,
        appearance: 'neutral'
      }} title='Не удалось загрузить' content='Попробуйте позже' />} />)]
    }]} />

      <StoryTable sectionTitle='Slots' firstColumnHeader='Slot' columnHeaders={['view']} rows={[{
      variantLabel: 'with readAll + footer',
      cells: [wrap(<NotificationPanelContent title='Уведомления' content={SAMPLE_CARDS} readAllButton={{
        label: 'Прочитать всё',
        onClick: fn()
      }} />)]
    }, {
      variantLabel: 'with filters (segments + chipToggle + settings)',
      cells: [wrap(<NotificationPanelContent title='Уведомления' content={SAMPLE_CARDS} segments={{
        items: [{
          value: 'all',
          label: 'Все'
        }, {
          value: 'unread',
          label: 'Непрочитанные'
        }],
        value: 'all',
        onChange: fn()
      }} chipToggle={{
        label: 'Только важные',
        checked: true,
        onChange: fn()
      }} settings={{
        button: {
          onClick: fn()
        },
        actions: [{
          content: {
            label: 'Настройки'
          },
          onClick: fn()
        }]
      }} />)]
    }, {
      variantLabel: 'with group',
      cells: [wrap(<NotificationPanelContent title='Уведомления' content={<>
                      <NotificationPanelContent.Group title='Backup'>
                        <NotificationCard id='g1' title='Бэкап завершён' description='prod-1' date='14:32' appearance={APPEARANCE.Success} />
                      </NotificationPanelContent.Group>
                    </>} />)]
    }]} />

      <StoryTable sectionTitle='Adaptive layout (desktop × mobile)' firstColumnHeader='layoutType' columnHeaders={['view']} rows={[{
      variantLabel: 'desktop',
      cells: [<AdaptiveProvider key='content-desktop' layoutType={LAYOUT_TYPE.Desktop}>
                {wrap(adaptiveContent)}
              </AdaptiveProvider>]
    }, {
      variantLabel: 'mobile',
      cells: [<AdaptiveProvider key='content-mobile' layoutType={LAYOUT_TYPE.Mobile}>
                {wrap(adaptiveContent)}
              </AdaptiveProvider>]
    }]} />
    </div>
}`,...C.parameters?.docs?.source}}},w=[`VisualMatrix`]}))();export{C as VisualMatrix,w as __namedExportsOrder,b as default};
//# sourceMappingURL=NotificationPanelContent.VisualMatrix.stories-lbghJNut.js.map