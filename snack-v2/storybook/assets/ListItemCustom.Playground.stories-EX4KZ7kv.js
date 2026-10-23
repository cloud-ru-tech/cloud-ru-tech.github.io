import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-BpLPVCO9.js";import{U as c,ln as l,t as u}from"./system-BuaCBWFZ.js";import{S as d,t as f}from"./src-Bgil9MEJ2.js";import{h as p,t as m}from"./src-s9ODpMLC.js";import{n as h,t as g}from"./styles.module-BG1oDCwa.js";var _,v,y,b,x,S,C;e((()=>{u(),f(),m(),o(),g(),_=t(),{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,b=`header-list-item-custom-playground`,x={title:`Uikit Product/Layout & containers/Layout/Header/ListCustom/ListItemCustom`,id:`uikit-product-layout-header-listcustom-listitemcustom`,id:`uikit-product-header-listitemcustom`,parameters:{layout:`fullscreen`},args:{selectionMode:d.Single,checked:!1,disabled:!1,asParentGroup:!1,asNested:!1},argTypes:{selectionMode:{control:`radio`,options:[d.Single,d.Multiple]},checked:{control:`boolean`},disabled:{control:`boolean`},asParentGroup:{control:`boolean`},asNested:{control:`boolean`}}},S={tags:[`dev`,`test`],render:function({selectionMode:e,checked:t,disabled:o,asParentGroup:u,asNested:d}){return(0,_.jsx)(r,{children:(0,_.jsxs)(a,{width:`wide`,children:[(0,_.jsx)(i,{children:`ListItemCustom`}),(0,_.jsx)(n,{children:"Индикаторы выбора рисует сама оболочка по `selectionMode` / `checked` / `disabled`. `asNested` → `level=1`, `asParentGroup` → `isParentNode` и шеврон."}),(0,_.jsx)(s,{align:`center`,children:(0,_.jsx)(`div`,{className:h.listFrame,"data-test-id":b,children:(0,_.jsx)(p,{selectionMode:e,checked:t,disabled:o,isParentNode:u||void 0,level:+!!d,expandIcon:u?(0,_.jsx)(l,{}):void 0,beforeContent:(0,_.jsx)(c,{}),afterContent:(0,_.jsx)(c,{}),content:{label:`Content text`,caption:`Caption`,description:`Description text`}})})})]})})},play:async({canvasElement:e})=>{await v(y(e).getByTestId(b)).toBeVisible()}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: function Render({
    selectionMode,
    checked,
    disabled,
    asParentGroup,
    asNested
  }) {
    return <DemoPage>
        <DemoPanel width='wide'>
          <DemoTitle>ListItemCustom</DemoTitle>
          <DemoHint>
            Индикаторы выбора рисует сама оболочка по \`selectionMode\` / \`checked\` / \`disabled\`. \`asNested\` → \`level=1\`,
            \`asParentGroup\` → \`isParentNode\` и шеврон.
          </DemoHint>
          <DemoActions align='center'>
            <div className={styles.listFrame} data-test-id={PLAYGROUND_ROOT}>
              <ListItemCustom selectionMode={selectionMode} checked={checked} disabled={disabled} isParentNode={asParentGroup || undefined} level={asNested ? 1 : 0} expandIcon={asParentGroup ? <ChevronDownSVG /> : undefined} beforeContent={<PlaceholderSVG />} afterContent={<PlaceholderSVG />} content={{
              label: 'Content text',
              caption: 'Caption',
              description: 'Description text'
            }} />
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(PLAYGROUND_ROOT)).toBeVisible();
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`]}))();export{S as Playground,C as __namedExportsOrder,x as default};
//# sourceMappingURL=ListItemCustom.Playground.stories-EX4KZ7kv.js.map