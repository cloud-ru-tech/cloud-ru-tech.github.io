import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BLXw10_m.js";import{c as i,i as a,t as o,u as s}from"./src-Bidarm84.js";import{n as c,t as l}from"./styles.module-BF0o0tKA.js";function u(e){return Array.from({length:e},(e,t)=>(0,d.jsx)(i,{id:`s${t}`,title:`Событие #${t+1}`,description:`Краткое описание события`,date:`сегодня · 14:32`,appearance:s.Default},t))}var d,f,p,m,h;e((()=>{o(),r(),l(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Uikit Product/Feedback/Notification/NotificationCardStack`,id:`uikit-product-notification-notificationcardstack`,component:a,parameters:{layout:`padded`}},m={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:c.matrix,children:[(0,d.jsx)(n,{sectionTitle:`State × Unread`,firstColumnHeader:`State`,columnHeaders:[`read`,`unread`],rows:[{variantLabel:`collapsed (3 cards)`,cells:[!1,!0].map(e=>(0,d.jsx)(`div`,{className:c.container,children:(0,d.jsx)(a,{title:`backup-cluster-1`,unread:e,children:u(3)})},String(e)))},{variantLabel:`expanded (3 cards)`,cells:[!1,!0].map(e=>(0,d.jsx)(`div`,{className:c.container,children:(0,d.jsx)(a,{title:`backup-cluster-1`,unread:e,defaultOpen:!0,children:u(3)})},String(e)))}]}),(0,d.jsx)(n,{sectionTitle:`Slots`,firstColumnHeader:`Slot`,columnHeaders:[`view`],rows:[{variantLabel:`with kebab actions`,cells:[(0,d.jsx)(`div`,{className:c.container,children:(0,d.jsx)(a,{title:`backup-cluster-1`,actions:[{content:{label:`Отметить как прочитанное`},onClick:f()},{content:{label:`Удалить всё`},onClick:f()}],children:u(3)})},`1`)]},{variantLabel:`single card (no stack)`,cells:[(0,d.jsx)(`div`,{className:c.container,children:(0,d.jsx)(a,{title:`single`,children:u(1)})},`2`)]}]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='State × Unread' firstColumnHeader='State' columnHeaders={['read', 'unread']} rows={[{
      variantLabel: 'collapsed (3 cards)',
      cells: [false, true].map(unread => <div key={String(unread)} className={styles.container}>
                <NotificationCardStack title='backup-cluster-1' unread={unread}>
                  {makeCards(3)}
                </NotificationCardStack>
              </div>)
    }, {
      variantLabel: 'expanded (3 cards)',
      cells: [false, true].map(unread => <div key={String(unread)} className={styles.container}>
                <NotificationCardStack title='backup-cluster-1' unread={unread} defaultOpen>
                  {makeCards(3)}
                </NotificationCardStack>
              </div>)
    }]} />

      <StoryTable sectionTitle='Slots' firstColumnHeader='Slot' columnHeaders={['view']} rows={[{
      variantLabel: 'with kebab actions',
      cells: [<div key='1' className={styles.container}>
                <NotificationCardStack title='backup-cluster-1' actions={[{
          content: {
            label: 'Отметить как прочитанное'
          },
          onClick: fn()
        }, {
          content: {
            label: 'Удалить всё'
          },
          onClick: fn()
        }]}>
                  {makeCards(3)}
                </NotificationCardStack>
              </div>]
    }, {
      variantLabel: 'single card (no stack)',
      cells: [<div key='2' className={styles.container}>
                <NotificationCardStack title='single'>{makeCards(1)}</NotificationCardStack>
              </div>]
    }]} />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`VisualMatrix`]}))();export{m as VisualMatrix,h as __namedExportsOrder,p as default};
//# sourceMappingURL=NotificationCardStack.VisualMatrix.stories-DUADTOKD.js.map