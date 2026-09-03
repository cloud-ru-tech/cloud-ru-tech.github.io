import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BPThJ53l.js";import{h as i,t as a}from"./src-C20Nqkl1.js";import{c as o,o as s,t as c,u as l}from"./src-CdzCsUaH.js";import{a as u,n as d,r as f,t as p}from"./constants-UFxjouOX.js";var m,h,g,_=e((()=>{m=`_container_xre5t_4`,h=`_matrix_xre5t_9`,g={container:m,matrix:h}})),v,y,b,x,S;e((()=>{a(),c(),r(),u(),_(),v=t(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Uikit Product/Feedback/Notification/NotificationCard`,id:`uikit-product-notification-notificationcard`,component:o,parameters:{layout:`padded`}},x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,v.jsxs)(`div`,{className:g.matrix,children:[(0,v.jsx)(n,{sectionTitle:`Appearance × Unread`,firstColumnHeader:`Appearance`,columnHeaders:[`read`,`unread`],rows:Object.values(l).map(e=>({variantLabel:e,cells:[!1,!0].map(t=>(0,v.jsx)(`div`,{className:g.container,children:(0,v.jsx)(o,{...d,...f,actions:p,appearance:e,unread:t})},String(t)))}))}),(0,v.jsx)(n,{sectionTitle:`Slots (appearance=default)`,firstColumnHeader:`Slot`,columnHeaders:[`view`],rows:[{variantLabel:`with link`,cells:[(0,v.jsx)(`div`,{className:g.container,children:(0,v.jsx)(o,{...d,label:void 0})},`1`)]},{variantLabel:`with label`,cells:[(0,v.jsx)(`div`,{className:g.container,children:(0,v.jsx)(o,{...d})},`1`)]},{variantLabel:`with primary + secondary buttons`,cells:[(0,v.jsx)(`div`,{className:g.container,children:(0,v.jsx)(o,{...d,...f,link:void 0})},`2`)]},{variantLabel:`with kebab actions`,cells:[(0,v.jsx)(`div`,{className:g.container,children:(0,v.jsx)(o,{...d,actions:p,link:void 0})},`3`)]},{variantLabel:`clickable + unread`,cells:[(0,v.jsx)(`div`,{className:g.container,children:(0,v.jsx)(o,{...d,link:void 0,unread:!0,onClick:y()})},`4`)]},{variantLabel:`with all slots`,cells:[(0,v.jsx)(`div`,{className:g.container,children:(0,v.jsx)(o,{...d,...f,actions:p,unread:!0,onClick:y()})},`4`)]},{variantLabel:`skeleton`,cells:[(0,v.jsx)(`div`,{className:g.container,children:(0,v.jsx)(i,{loading:!0,children:(0,v.jsx)(s,{})})},`5`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Appearance × Unread' firstColumnHeader='Appearance' columnHeaders={['read', 'unread']} rows={Object.values(APPEARANCE).map(appearance => ({
      variantLabel: appearance,
      cells: [false, true].map(unread => <div key={String(unread)} className={styles.container}>
              <NotificationCard {...BASE_PROPS} {...BUTTONS_PROPS} actions={ACTIONS} appearance={appearance} unread={unread} />
            </div>)
    }))} />

      <StoryTable sectionTitle='Slots (appearance=default)' firstColumnHeader='Slot' columnHeaders={['view']} rows={[{
      variantLabel: 'with link',
      cells: [<div key='1' className={styles.container}>
                <NotificationCard {...BASE_PROPS} label={undefined} />
              </div>]
    }, {
      variantLabel: 'with label',
      cells: [<div key='1' className={styles.container}>
                <NotificationCard {...BASE_PROPS} />
              </div>]
    }, {
      variantLabel: 'with primary + secondary buttons',
      cells: [<div key='2' className={styles.container}>
                <NotificationCard {...BASE_PROPS} {...BUTTONS_PROPS} link={undefined} />
              </div>]
    }, {
      variantLabel: 'with kebab actions',
      cells: [<div key='3' className={styles.container}>
                <NotificationCard {...BASE_PROPS} actions={ACTIONS} link={undefined} />
              </div>]
    }, {
      variantLabel: 'clickable + unread',
      cells: [<div key='4' className={styles.container}>
                <NotificationCard {...BASE_PROPS} link={undefined} unread onClick={fn()} />
              </div>]
    }, {
      variantLabel: 'with all slots',
      cells: [<div key='4' className={styles.container}>
                <NotificationCard {...BASE_PROPS} {...BUTTONS_PROPS} actions={ACTIONS} unread onClick={fn()} />
              </div>]
    }, {
      variantLabel: 'skeleton',
      cells: [<div key='5' className={styles.container}>
                <SkeletonContextProvider loading={true}>
                  <NotificationCardSkeleton />
                </SkeletonContextProvider>
              </div>]
    }]} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,b as default};
//# sourceMappingURL=NotificationCard.VisualMatrix.stories-AS5pUOG9.js.map