import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,n as r,o as i,t as a}from"./src-0j6oBZ3s.js";import{n as o,o as s,t as c}from"./src-DZf_MIpS.js";import{t as l,v as u,z as d}from"./src-pw_SYb1s.js";import{a as f,c as p,d as m,t as h}from"./fixtures-3TtYie2S.js";import{n as g,r as _}from"./testIds-DOBCNkqh.js";import{n as v,t as y}from"./sharedMeta-CSWVkjU5.js";var b,x,S,C,w,T=e((()=>{b=`_body_vv4q5_4`,x=`_header_vv4q5_12`,S=`_name_vv4q5_18`,C=`_meta_vv4q5_28`,w={body:b,header:x,name:S,meta:C}})),E,D,O,k,A,j,M,N,P;e((()=>{a(),c(),l(),p(),_(),y(),T(),E=t(),{expect:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Snack/Data display/Table/Table/Examples/CustomCard`,id:`components-table-table-examples-customcard`,...v},A=`table-custom-card`,j=f({withStatusColumn:!0}),M={active:s.Green,pending:s.Yellow,blocked:s.Red,invited:s.Blue},N={tags:[`dev`,`test`],render:()=>(0,E.jsx)(u,{"data-test-id":g.table.root,data:h,columnDefinitions:j,defaultView:d.Cards,headlineId:`name`,cardColumns:2,renderCard:({row:e})=>{let t=e.original;return(0,E.jsx)(r,{radius:i.S,view:n.Outline,"data-test-id":A,children:(0,E.jsxs)(`div`,{className:w.body,children:[(0,E.jsxs)(`div`,{className:w.header,children:[(0,E.jsx)(`span`,{className:w.name,children:t.name}),(0,E.jsx)(o,{appearance:M[t.status],label:m(t.status)})]}),(0,E.jsx)(`span`,{className:w.meta,children:t.email}),(0,E.jsx)(`span`,{className:w.meta,children:t.role})]})})}}),play:async({canvasElement:e})=>{let t=O(e).getAllByTestId(A);D(t.length).toBeGreaterThan(0)}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <Table data-test-id={TEST_IDS.table.root} data={SAMPLE_USERS} columnDefinitions={columns} defaultView={VIEW.Cards} headlineId='name'
  // Сетка в 2 колонки с перестроением по ширине контейнера.
  cardColumns={2}
  // renderCard заменяет дефолтную карточку: контекст даёт tanstack row/table
  // и defaultRender (готовый элемент дефолтной карточки).
  renderCard={({
    row
  }) => {
    const user = row.original;
    return <Card radius={RADIUS.S} view={CARD_VIEW.Outline} data-test-id={CUSTOM_CARD_TEST_ID}>
            <div className={styles.body}>
              <div className={styles.header}>
                <span className={styles.name}>{user.name}</span>
                <Status appearance={STATUS_TO_APPEARANCE[user.status]} label={userStatusLabel(user.status)} />
              </div>
              <span className={styles.meta}>{user.email}</span>
              <span className={styles.meta}>{user.role}</span>
            </div>
          </Card>;
  }} />,
  play: async ({
    canvasElement
  }) => {
    const cards = within(canvasElement).getAllByTestId(CUSTOM_CARD_TEST_ID);
    expect(cards.length).toBeGreaterThan(0);
  }
}`,...N.parameters?.docs?.source}}},P=[`CustomCard`]}))();export{N as CustomCard,P as __namedExportsOrder,k as default};
//# sourceMappingURL=Table.CustomCard.stories-B8VyqeIe.js.map