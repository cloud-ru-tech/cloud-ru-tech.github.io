import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-Bb1kR6xz.js";import{V as i,g as a,t as o,u as s}from"./src-CpfZfwH7.js";import{n as c,o as l,r as u}from"./presetFixtures-Dd-bLJYc.js";import{n as d,r as f}from"./testIds-HzUa7nTu.js";import{n as p,t as m}from"./styles.module-Dlkg2V-u.js";var h,g,_,v,y,b;e((()=>{o(),r(),u(),f(),m(),h=t(),g={title:`Snack/Data display/Table/InfiniteTable`,id:`components-table-infinitetable`,component:s,parameters:{layout:`fullscreen`}},_={data:c,columns:a(l),getRowId:e=>e.id,hasMore:!1,"data-test-id":d.table.root,outline:!0},v=c.slice(0,3),y={tags:[`test`,`dev`],render:()=>(0,h.jsx)(`div`,{className:p.matrix,children:(0,h.jsx)(n,{firstColumnHeader:`Состояние`,columnHeaders:[`InfiniteTable`],cellAlign:`start`,rows:[{variantLabel:`default`,cells:[(0,h.jsx)(`div`,{className:p.scrollArea,children:(0,h.jsx)(s,{..._})},`default`)]},{variantLabel:`loading`,cells:[(0,h.jsx)(`div`,{className:p.scrollArea,children:(0,h.jsx)(s,{..._,loading:!0})},`loading`)]},{variantLabel:`empty`,cells:[(0,h.jsx)(`div`,{className:p.scrollArea,children:(0,h.jsx)(s,{..._,data:[]})},`empty`)]},{variantLabel:`loadMoreTrigger='button' + hasMore`,cells:[(0,h.jsx)(`div`,{className:p.scrollArea,children:(0,h.jsx)(s,{..._,data:v,loadMoreTrigger:`button`,hasMore:!0})},`load-more-button`)]},{variantLabel:`loadMoreTrigger='button' + hasMore=false`,cells:[(0,h.jsx)(`div`,{className:p.scrollArea,children:(0,h.jsx)(s,{..._,data:v,loadMoreTrigger:`button`,hasMore:!1})},`load-more-button-no-more`)]},{variantLabel:`loadMoreTrigger='button' loading`,cells:[(0,h.jsx)(`div`,{className:p.scrollArea,children:(0,h.jsx)(s,{..._,data:v,loadMoreTrigger:`button`,hasMore:!0,loading:!0})},`load-more-button-loading`)]},{variantLabel:`defaultView='cards'`,cells:[(0,h.jsx)(`div`,{className:p.scrollArea,children:(0,h.jsx)(s,{..._,defaultView:i.Cards,headlineKey:`name`})},`cards`)]}]})})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.matrix}>
      <StoryTable firstColumnHeader='Состояние' columnHeaders={['InfiniteTable']} cellAlign='start' rows={[{
      variantLabel: 'default',
      cells: [<div key='default' className={styles.scrollArea}>
                <InfiniteTable {...baseProps} />
              </div>]
    }, {
      variantLabel: 'loading',
      cells: [<div key='loading' className={styles.scrollArea}>
                <InfiniteTable {...baseProps} loading />
              </div>]
    }, {
      variantLabel: 'empty',
      cells: [<div key='empty' className={styles.scrollArea}>
                <InfiniteTable {...baseProps} data={[]} />
              </div>]
    }, {
      variantLabel: "loadMoreTrigger='button' + hasMore",
      cells: [<div key='load-more-button' className={styles.scrollArea}>
                <InfiniteTable {...baseProps} data={FEW_USERS} loadMoreTrigger='button' hasMore />
              </div>]
    }, {
      variantLabel: "loadMoreTrigger='button' + hasMore=false",
      cells: [<div key='load-more-button-no-more' className={styles.scrollArea}>
                <InfiniteTable {...baseProps} data={FEW_USERS} loadMoreTrigger='button' hasMore={false} />
              </div>]
    }, {
      variantLabel: "loadMoreTrigger='button' loading",
      cells: [<div key='load-more-button-loading' className={styles.scrollArea}>
                <InfiniteTable {...baseProps} data={FEW_USERS} loadMoreTrigger='button' hasMore loading />
              </div>]
    }, {
      variantLabel: "defaultView='cards'",
      cells: [<div key='cards' className={styles.scrollArea}>
                <InfiniteTable {...baseProps} defaultView={VIEW.Cards} headlineKey='name' />
              </div>]
    }]} />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`VisualMatrix`]}))();export{y as VisualMatrix,b as __namedExportsOrder,g as default};
//# sourceMappingURL=InfiniteTable.VisualMatrix.stories-BLCkVw-f.js.map