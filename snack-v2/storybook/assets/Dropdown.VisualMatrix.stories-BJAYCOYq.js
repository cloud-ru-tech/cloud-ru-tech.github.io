import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{i,t as a}from"./iframe-CSZ3Qkp5.js";import{a as o,t as s}from"./src-CNfhYx-4.js";import{i as c,n as l,t as u}from"./src-BqmatYgj.js";import{n as d,t as f}from"./src-CaGZ9Fdg.js";import{n as p,t as m}from"./styles.module-DCYjJpCF.js";function h(e,t){return(0,_.jsx)(`ul`,{className:(0,g.default)(p.list,t),children:e.map(e=>(0,_.jsx)(`li`,{className:p.listItem,children:e},e))})}var g,_,v,y,b,x,S,C,w,T,E;t((()=>{s(),u(),f(),g=e(r(),1),a(),m(),_=n(),v={title:`Snack/Overlays/Dropdown`,id:`components-dropdown`,component:l,parameters:{layout:`padded`}},y=()=>(0,_.jsx)(`div`,{className:p.content,children:`Содержимое dropdown`}),b=[`Москва`,`Санкт-Петербург`,`Казань`,`Новосибирск`,`Екатеринбург`],x=Array.from({length:24},(e,t)=>`Элемент списка ${t+1}`),S=[`bottom-start`,`bottom`,`bottom-end`],C=b.slice(0,3),w=(0,_.jsxs)(`div`,{className:p.row,children:[(0,_.jsx)(o,{size:`s`,view:`outline`,appearance:`neutral`,label:`Сбросить`}),(0,_.jsx)(o,{size:`s`,label:`Применить`})]}),T={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:p.matrix,children:[(0,_.jsx)(i,{sectionTitle:`Placement`,firstColumnHeader:`Opened`,columnHeaders:[...S],rows:[{variantLabel:`open`,cells:S.map(e=>(0,_.jsx)(`div`,{className:p.cell,children:(0,_.jsx)(l,{open:!0,placement:e,content:(0,_.jsx)(y,{}),children:(0,_.jsx)(o,{label:e})})},e))}]}),(0,_.jsx)(i,{sectionTitle:`States`,firstColumnHeader:`State`,columnHeaders:[`loading`,`not-found`,`no-data`,`data-error`],rows:[{variantLabel:`open`,cells:[(0,_.jsx)(`div`,{className:p.cell,children:(0,_.jsx)(l,{open:!0,state:{type:c.Loading},content:null,children:(0,_.jsx)(o,{label:`loading`})})},`loading`),(0,_.jsx)(`div`,{className:p.cell,children:(0,_.jsx)(l,{open:!0,state:{type:c.NotFound,content:`Ничего не найдено`,actionLabel:`Retry`},content:null,children:(0,_.jsx)(o,{label:`not-found`})})},`not-found`),(0,_.jsx)(`div`,{className:p.cell,children:(0,_.jsx)(l,{open:!0,state:{type:c.NoData,content:`Нет данных`,actionLabel:`Retry`},content:null,children:(0,_.jsx)(o,{label:`no-data`})})},`no-data`),(0,_.jsx)(`div`,{className:p.cell,children:(0,_.jsx)(l,{open:!0,state:{type:c.DataError,content:`Ошибка загрузки`,actionLabel:`Retry`},content:null,children:(0,_.jsx)(o,{label:`data-error`})})},`data-error`)]}]}),(0,_.jsx)(i,{sectionTitle:`Chrome — header / footer / dividers`,firstColumnHeader:`Chrome`,columnHeaders:[`header + divider`,`header + search`,`footer + divider`,`all + dividers`],rows:[{variantLabel:`open`,cells:[(0,_.jsx)(`div`,{className:p.chromeCell,children:(0,_.jsx)(l,{open:!0,title:`Сортировать по`,headerDivider:!0,bodyPadding:!1,content:h(C),children:(0,_.jsx)(o,{label:`header + divider`})})},`header-divider`),(0,_.jsx)(`div`,{className:p.chromeCell,children:(0,_.jsx)(l,{open:!0,title:`Сортировать по`,search:(0,_.jsx)(d,{size:`s`,placeholder:`Поиск`}),headerDivider:!0,bodyPadding:!1,content:h(C),children:(0,_.jsx)(o,{label:`header + search`})})},`header-search`),(0,_.jsx)(`div`,{className:p.chromeCell,children:(0,_.jsx)(l,{open:!0,footer:w,footerDivider:!0,bodyPadding:!1,content:h(C),children:(0,_.jsx)(o,{label:`footer + divider`})})},`footer-divider`),(0,_.jsx)(`div`,{className:p.chromeCell,children:(0,_.jsx)(l,{open:!0,title:`Сортировать по`,search:(0,_.jsx)(d,{size:`s`,placeholder:`Поиск`}),headerDivider:!0,footer:w,footerDivider:!0,bodyPadding:!1,content:h(C),children:(0,_.jsx)(o,{label:`all`})})},`all`)]}]}),(0,_.jsx)(i,{sectionTitle:`Content shape`,firstColumnHeader:`Items`,columnHeaders:[`short list`,`long list (scrollable)`],rows:[{variantLabel:`open`,cells:[(0,_.jsx)(`div`,{className:p.cell,children:(0,_.jsx)(l,{open:!0,content:h(b),children:(0,_.jsx)(o,{label:`Открыть список`})})},`short`),(0,_.jsx)(`div`,{className:p.cell,children:(0,_.jsx)(l,{open:!0,content:h(x,p.longList),children:(0,_.jsx)(o,{label:`Длинный список`})})},`long`)]}]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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

      <StoryTable sectionTitle='Chrome — header / footer / dividers' firstColumnHeader='Chrome' columnHeaders={['header + divider', 'header + search', 'footer + divider', 'all + dividers']} rows={[{
      variantLabel: 'open',
      cells: [<div key='header-divider' className={styles.chromeCell}>
                <Dropdown open title='Сортировать по' headerDivider bodyPadding={false} content={renderList(CHROME_ITEMS)}>
                  <Button label='header + divider' />
                </Dropdown>
              </div>, <div key='header-search' className={styles.chromeCell}>
                <Dropdown open title='Сортировать по' search={<SearchPrivate size='s' placeholder='Поиск' />} headerDivider bodyPadding={false} content={renderList(CHROME_ITEMS)}>
                  <Button label='header + search' />
                </Dropdown>
              </div>, <div key='footer-divider' className={styles.chromeCell}>
                <Dropdown open footer={chromeFooter} footerDivider bodyPadding={false} content={renderList(CHROME_ITEMS)}>
                  <Button label='footer + divider' />
                </Dropdown>
              </div>, <div key='all' className={styles.chromeCell}>
                <Dropdown open title='Сортировать по' search={<SearchPrivate size='s' placeholder='Поиск' />} headerDivider footer={chromeFooter} footerDivider bodyPadding={false} content={renderList(CHROME_ITEMS)}>
                  <Button label='all' />
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
}`,...T.parameters?.docs?.source}}},E=[`VisualMatrix`]}))();export{T as VisualMatrix,E as __namedExportsOrder,v as default};
//# sourceMappingURL=Dropdown.VisualMatrix.stories-BJAYCOYq.js.map