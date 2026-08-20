import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-Bd5xtg2w.js";import{a as o,t as s}from"./src-DtM8jTZH.js";import{i as c,n as l,t as u}from"./src-DjSP9VQd.js";import{n as d,t as f}from"./styles.module-ZEZF1H1D.js";function p(e,t){return(0,h.jsx)(`ul`,{className:(0,m.default)(d.list,t),children:e.map(e=>(0,h.jsx)(`li`,{className:d.listItem,children:e},e))})}var m,h,g,_,v,y,b,x,S;t((()=>{s(),u(),m=e(r(),1),a(),f(),h=n(),g={title:`Snack/Overlays/Dropdown`,id:`components-dropdown`,component:l,parameters:{layout:`padded`}},_=()=>(0,h.jsx)(`div`,{className:d.content,children:`Содержимое dropdown`}),v=[`Москва`,`Санкт-Петербург`,`Казань`,`Новосибирск`,`Екатеринбург`],y=Array.from({length:24},(e,t)=>`Элемент списка ${t+1}`),b=[`bottom-start`,`bottom`,`bottom-end`],x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,h.jsxs)(`div`,{className:d.matrix,children:[(0,h.jsx)(i,{sectionTitle:`Placement`,firstColumnHeader:`Opened`,columnHeaders:[...b],rows:[{variantLabel:`open`,cells:b.map(e=>(0,h.jsx)(`div`,{className:d.cell,children:(0,h.jsx)(l,{open:!0,placement:e,content:(0,h.jsx)(_,{}),children:(0,h.jsx)(o,{label:e})})},e))}]}),(0,h.jsx)(i,{sectionTitle:`States`,firstColumnHeader:`State`,columnHeaders:[`loading`,`not-found`,`no-data`,`data-error`],rows:[{variantLabel:`open`,cells:[(0,h.jsx)(`div`,{className:d.cell,children:(0,h.jsx)(l,{open:!0,state:{type:c.Loading},content:null,children:(0,h.jsx)(o,{label:`loading`})})},`loading`),(0,h.jsx)(`div`,{className:d.cell,children:(0,h.jsx)(l,{open:!0,state:{type:c.NotFound,content:`Ничего не найдено`,actionLabel:`Retry`},content:null,children:(0,h.jsx)(o,{label:`not-found`})})},`not-found`),(0,h.jsx)(`div`,{className:d.cell,children:(0,h.jsx)(l,{open:!0,state:{type:c.NoData,content:`Нет данных`,actionLabel:`Retry`},content:null,children:(0,h.jsx)(o,{label:`no-data`})})},`no-data`),(0,h.jsx)(`div`,{className:d.cell,children:(0,h.jsx)(l,{open:!0,state:{type:c.DataError,content:`Ошибка загрузки`,actionLabel:`Retry`},content:null,children:(0,h.jsx)(o,{label:`data-error`})})},`data-error`)]}]}),(0,h.jsx)(i,{sectionTitle:`Content shape`,firstColumnHeader:`Items`,columnHeaders:[`short list`,`long list (scrollable)`],rows:[{variantLabel:`open`,cells:[(0,h.jsx)(`div`,{className:d.cell,children:(0,h.jsx)(l,{open:!0,content:p(v),children:(0,h.jsx)(o,{label:`Открыть список`})})},`short`),(0,h.jsx)(`div`,{className:d.cell,children:(0,h.jsx)(l,{open:!0,content:p(y,d.longList),children:(0,h.jsx)(o,{label:`Длинный список`})})},`long`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Placement' firstColumnHeader='Opened' columnHeaders={[...placements]} rows={[{
      variantLabel: 'open',
      cells: placements.map(placement => <div key={placement} className={styles.cell}>
                <Dropdown open placement={placement} content={<SimpleContent />}>
                  <Button label={placement} />
                </Dropdown>
              </div>)
    }]} />

      <StoryTable sectionTitle='States' firstColumnHeader='State' columnHeaders={['loading', 'not-found', 'no-data', 'data-error']} rows={[{
      variantLabel: 'open',
      cells: [<div key='loading' className={styles.cell}>
                <Dropdown open state={{
          type: STATE.Loading
        }} content={null}>
                  <Button label='loading' />
                </Dropdown>
              </div>, <div key='not-found' className={styles.cell}>
                <Dropdown open state={{
          type: STATE.NotFound,
          content: 'Ничего не найдено',
          actionLabel: 'Retry'
        }} content={null}>
                  <Button label='not-found' />
                </Dropdown>
              </div>, <div key='no-data' className={styles.cell}>
                <Dropdown open state={{
          type: STATE.NoData,
          content: 'Нет данных',
          actionLabel: 'Retry'
        }} content={null}>
                  <Button label='no-data' />
                </Dropdown>
              </div>, <div key='data-error' className={styles.cell}>
                <Dropdown open state={{
          type: STATE.DataError,
          content: 'Ошибка загрузки',
          actionLabel: 'Retry'
        }} content={null}>
                  <Button label='data-error' />
                </Dropdown>
              </div>]
    }]} />

      <StoryTable sectionTitle='Content shape' firstColumnHeader='Items' columnHeaders={['short list', 'long list (scrollable)']} rows={[{
      variantLabel: 'open',
      cells: [<div key='short' className={styles.cell}>
                <Dropdown open content={renderList(SHORT_ITEMS)}>
                  <Button label='Открыть список' />
                </Dropdown>
              </div>, <div key='long' className={styles.cell}>
                <Dropdown open content={renderList(LONG_ITEMS, styles.longList)}>
                  <Button label='Длинный список' />
                </Dropdown>
              </div>]
    }]} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,g as default};
//# sourceMappingURL=Dropdown.VisualMatrix.stories-uXvIxFBY.js.map