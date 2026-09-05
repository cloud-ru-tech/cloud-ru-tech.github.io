import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C2bZDhP2.js";import{F as i,Zt as a,t as o}from"./system-DULkXZcO.js";import{c as s,n as c,t as l,u}from"./src-iqxZR4KC.js";import{n as d,t as f}from"./fixtures-Bcs1_HA7.js";var p,m,h,g=e((()=>{p=`_container_tgrkm_4`,m=`_matrix_tgrkm_9`,h={container:p,matrix:m}})),_,v,y,b,x;e((()=>{o(),l(),r(),d(),g(),_=t(),v={title:`Uikit Product/Feedback/Notification/NotificationPanel`,id:`uikit-product-notification-notificationpanel`,component:c,parameters:{layout:`padded`}},y=e=>(0,_.jsx)(`div`,{className:h.container,children:e}),b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:h.matrix,children:[(0,_.jsx)(n,{sectionTitle:`Body state`,firstColumnHeader:`State`,columnHeaders:[`view`],rows:[{variantLabel:`cards`,cells:[y(f)]},{variantLabel:`blank`,cells:[y((0,_.jsx)(c.Blank,{icon:{icon:i,appearance:`neutral`},title:`Нет уведомлений`,content:`Здесь будут новые события`}))]},{variantLabel:`error`,cells:[y((0,_.jsx)(c.Blank,{icon:{icon:a,appearance:`neutral`},title:`Не удалось загрузить`,content:`Попробуйте позже`}))]}]}),(0,_.jsx)(n,{sectionTitle:`Composition`,firstColumnHeader:`Slot`,columnHeaders:[`view`],rows:[{variantLabel:`group`,cells:[y((0,_.jsx)(c.Group,{title:`Backup`,children:(0,_.jsx)(s,{id:`g1`,title:`Бэкап завершён`,description:`prod-1`,date:`14:32`,appearance:u.Success})}))]},{variantLabel:`stack`,cells:[y((0,_.jsxs)(c.Stack,{title:`Лимит дисковой квоты · 2 хоста`,unread:!0,children:[(0,_.jsx)(s,{id:`s1`,title:`prod-1 · /var/data`,description:`Использовано 92%`,date:`01:12`,appearance:u.Warning}),(0,_.jsx)(s,{id:`s2`,title:`prod-2 · /var/log`,description:`Использовано 87%`,date:`00:48`,appearance:u.Warning})]}))]}]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Body state' firstColumnHeader='State' columnHeaders={['view']} rows={[{
      variantLabel: 'cards',
      cells: [wrap(SAMPLE_CARDS)]
    }, {
      variantLabel: 'blank',
      cells: [wrap(<NotificationPanel.Blank icon={{
        icon: SearchSVG,
        appearance: 'neutral'
      }} title='Нет уведомлений' content='Здесь будут новые события' />)]
    }, {
      variantLabel: 'error',
      cells: [wrap(<NotificationPanel.Blank icon={{
        icon: CrossSVG,
        appearance: 'neutral'
      }} title='Не удалось загрузить' content='Попробуйте позже' />)]
    }]} />

      <StoryTable sectionTitle='Composition' firstColumnHeader='Slot' columnHeaders={['view']} rows={[{
      variantLabel: 'group',
      cells: [wrap(<NotificationPanel.Group title='Backup'>
                  <NotificationCard id='g1' title='Бэкап завершён' description='prod-1' date='14:32' appearance={APPEARANCE.Success} />
                </NotificationPanel.Group>)]
    }, {
      variantLabel: 'stack',
      cells: [wrap(<NotificationPanel.Stack title='Лимит дисковой квоты · 2 хоста' unread>
                  <NotificationCard id='s1' title='prod-1 · /var/data' description='Использовано 92%' date='01:12' appearance={APPEARANCE.Warning} />
                  <NotificationCard id='s2' title='prod-2 · /var/log' description='Использовано 87%' date='00:48' appearance={APPEARANCE.Warning} />
                </NotificationPanel.Stack>)]
    }]} />
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Сама поверхность панели — full-viewport overlay: несколько открытых инстансов в StoryTable\nперекрывают друг друга, поэтому desktop/mobile-поверхности снимаются отдельно\n(`open.png` / `open-mobile.png` в visual.spec). VisualMatrix покрывает инлайновую часть API —\nкомпозиции тела панели (`Blank` / `Group` / `Stack`).",...b.parameters?.docs?.description}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,v as default};
//# sourceMappingURL=NotificationPanel.VisualMatrix.stories-B6kbgba_.js.map