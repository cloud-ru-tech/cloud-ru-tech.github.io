import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,f as a,g as o,p as s,t as c,u as l}from"./iframe-CXTziK01.js";import{U as u,t as d}from"./system-_m_TvMq7.js";import{a as f,t as p}from"./src-wigeUBwN.js";import{d as m,f as h,h as g,p as _,t as v}from"./src-DstgyzGi.js";import{n as y,t as b}from"./styles.module-BG1oDCwa.js";var x,S,C,w,T,E,D,O;t((()=>{d(),p(),v(),x=e(n(),1),c(),b(),S=r(),{expect:C,within:w}=__STORYBOOK_MODULE_TEST__,T={title:`Uikit Product/Layout & containers/Layout/Header/ListCustom`,id:`uikit-product-layout-header-listcustom`,id:`uikit-product-header-listcustom`,parameters:{layout:`fullscreen`}},E=`header-list-custom-playground`,D={tags:[`dev`,`test`],render:function(){let[e,t]=(0,x.useState)(`a`);return(0,S.jsx)(a,{children:(0,S.jsxs)(s,{width:`wide`,children:[(0,S.jsx)(o,{children:`ListCustom`}),(0,S.jsx)(i,{children:"`ListItemCustom` и `ListItemGroupCustom` подключаются к `List` через `itemRender` / `groupItemRender`. Внутри строки — `ContentWrapperCustom`."}),(0,S.jsx)(l,{align:`center`,children:(0,S.jsx)(`div`,{className:y.listFrame,children:(0,S.jsx)(f,{"data-test-id":E,size:`s`,marker:!0,selection:{mode:`single`,value:e,onChange:t},itemRender:m,groupItemRender:h,items:[{type:`group`,label:`Группа`,groupVariant:`subtitleTertiary`,items:[{id:`a`,beforeContent:(0,S.jsx)(u,{}),content:{label:`Пункт A`,description:`Описание`}},{id:`b`,beforeContent:(0,S.jsx)(u,{}),content:{label:`Пункт B`,caption:`meta`}}]},{type:`group`,divider:!0,items:[]},{id:`c`,beforeContent:(0,S.jsx)(u,{}),content:{label:`Пункт C`},disabled:!0}]})})})]})})},play:async({canvasElement:e})=>{await C(w(e).getByTestId(E)).toBeVisible(),await C(g).toBeTruthy(),await C(_).toBeTruthy()}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: function Render() {
    const [selected, setSelected] = useState<string | number>('a');
    return <DemoPage>
        <DemoPanel width='wide'>
          <DemoTitle>ListCustom</DemoTitle>
          <DemoHint>
            \`ListItemCustom\` и \`ListItemGroupCustom\` подключаются к \`List\` через \`itemRender\` / \`groupItemRender\`.
            Внутри строки — \`ContentWrapperCustom\`.
          </DemoHint>
          <DemoActions align='center'>
            <div className={styles.listFrame}>
              <List data-test-id={PLAYGROUND_ROOT} size='s' marker selection={{
              mode: 'single',
              value: selected,
              onChange: setSelected
            }} itemRender={renderListItemCustom} groupItemRender={renderListItemGroupCustom} items={[{
              type: 'group',
              label: 'Группа',
              groupVariant: 'subtitleTertiary',
              items: [{
                id: 'a',
                beforeContent: <PlaceholderSVG />,
                content: {
                  label: 'Пункт A',
                  description: 'Описание'
                }
              }, {
                id: 'b',
                beforeContent: <PlaceholderSVG />,
                content: {
                  label: 'Пункт B',
                  caption: 'meta'
                }
              }]
            }, {
              type: 'group',
              divider: true,
              items: []
            }, {
              id: 'c',
              beforeContent: <PlaceholderSVG />,
              content: {
                label: 'Пункт C'
              },
              disabled: true
            }]} />
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(PLAYGROUND_ROOT)).toBeVisible();
    // Компоненты экспортируются и используются как рендеры — smoke на корне списка.
    await expect(ListItemCustom).toBeTruthy();
    await expect(ListItemGroupCustom).toBeTruthy();
  }
}`,...D.parameters?.docs?.source}}},O=[`Playground`]}))();export{D as Playground,O as __namedExportsOrder,T as default};
//# sourceMappingURL=ListCustom.Playground.stories-C_tZexn3.js.map