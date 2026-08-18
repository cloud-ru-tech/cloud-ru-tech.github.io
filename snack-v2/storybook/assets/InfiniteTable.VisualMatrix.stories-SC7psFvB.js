import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-jFn_-H4h.js";import{t as i,u as a,z as o}from"./src-BFnLcVPc.js";import{n as s,o as c,r as l}from"./presetFixtures-DlaSuPw2.js";import{n as u,r as d}from"./testIds-zndDgWg-2.js";import{n as f,t as p}from"./styles.module-Dlkg2V-u.js";var m,h,g,_,v,y;e((()=>{i(),r(),l(),d(),p(),m=t(),h={title:`Snack/Data display/Table/InfiniteTable`,id:`components-table-infinitetable`,component:a,parameters:{layout:`fullscreen`}},g={data:s,columns:c,getRowId:e=>e.id,hasMore:!1,"data-test-id":u.table.root,outline:!0},_=s.slice(0,3),v={tags:[`test`,`dev`],render:()=>(0,m.jsx)(`div`,{className:f.matrix,children:(0,m.jsx)(n,{firstColumnHeader:`Состояние`,columnHeaders:[`InfiniteTable`],cellAlign:`start`,rows:[{variantLabel:`default`,cells:[(0,m.jsx)(`div`,{className:f.scrollArea,children:(0,m.jsx)(a,{...g})},`default`)]},{variantLabel:`loading`,cells:[(0,m.jsx)(`div`,{className:f.scrollArea,children:(0,m.jsx)(a,{...g,loading:!0})},`loading`)]},{variantLabel:`empty`,cells:[(0,m.jsx)(`div`,{className:f.scrollArea,children:(0,m.jsx)(a,{...g,data:[]})},`empty`)]},{variantLabel:`loadMoreTrigger='button' + hasMore`,cells:[(0,m.jsx)(`div`,{className:f.scrollArea,children:(0,m.jsx)(a,{...g,data:_,loadMoreTrigger:`button`,hasMore:!0})},`load-more-button`)]},{variantLabel:`loadMoreTrigger='button' + hasMore=false`,cells:[(0,m.jsx)(`div`,{className:f.scrollArea,children:(0,m.jsx)(a,{...g,data:_,loadMoreTrigger:`button`,hasMore:!1})},`load-more-button-no-more`)]},{variantLabel:`loadMoreTrigger='button' loading`,cells:[(0,m.jsx)(`div`,{className:f.scrollArea,children:(0,m.jsx)(a,{...g,data:_,loadMoreTrigger:`button`,hasMore:!0,loading:!0})},`load-more-button-loading`)]},{variantLabel:`defaultView='cards'`,cells:[(0,m.jsx)(`div`,{className:f.scrollArea,children:(0,m.jsx)(a,{...g,defaultView:o.Cards,headlineKey:`name`})},`cards`)]}]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,h as default};
//# sourceMappingURL=InfiniteTable.VisualMatrix.stories-SC7psFvB.js.map