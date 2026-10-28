import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,f as r,g as i,p as a,t as o,u as s}from"./iframe-CYEdIo2A.js";import{U as c,t as l}from"./system-DX78okNY.js";import{p as u,t as d}from"./src-ClW4qB_a.js";import{n as f,t as p}from"./styles.module-BG1oDCwa.js";var m,h,g,_,v,y,b;e((()=>{l(),d(),o(),p(),m=t(),{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_=`header-list-item-group-custom-playground`,v={title:`Uikit Product/Layout & containers/Layout/Header/ListCustom/ListItemGroupCustom`,id:`uikit-product-layout-header-listcustom-listitemgroupcustom`,id:`uikit-product-header-listitemgroupcustom`,parameters:{layout:`fullscreen`},args:{withLabel:!0,groupVariant:`subtitleTertiary`,divider:!1,asNested:!1,label:`Subtitle text`,showBeforeContent:!0},argTypes:{withLabel:{name:`[Stories]: withLabel`,control:`boolean`},groupVariant:{control:`radio`,options:[`subtitle`,`subtitleTertiary`],if:{arg:`withLabel`,eq:!0}},divider:{control:`boolean`,if:{arg:`withLabel`,eq:!0}},label:{control:`text`,if:{arg:`withLabel`,eq:!0}},showBeforeContent:{name:`[Stories]: showBeforeContent`,control:`boolean`,if:{arg:`withLabel`,eq:!0}},asNested:{control:`boolean`}}},y={tags:[`dev`,`test`],render:function({withLabel:e,groupVariant:t,divider:o,asNested:l,label:d,showBeforeContent:p}){let h=+!!l;return(0,m.jsx)(r,{children:(0,m.jsxs)(a,{width:`wide`,children:[(0,m.jsx)(i,{children:`ListItemGroupCustom`}),(0,m.jsx)(n,{children:"Публичный API: `groupVariant` (`subtitle` / `subtitleTertiary`) и отдельный `divider`. Третий вид Figma (только линия) — `divider` без `label`: выключи `[Stories]: withLabel`."}),(0,m.jsx)(s,{align:`center`,children:(0,m.jsx)(`div`,{className:f.listFrame,"data-test-id":_,children:e?(0,m.jsx)(u,{label:d,groupVariant:t,divider:o,beforeContent:p?(0,m.jsx)(c,{}):void 0,level:h,size:`s`}):(0,m.jsx)(u,{divider:!0,level:h,size:`s`})})})]})})},play:async({canvasElement:e})=>{await h(g(e).getByTestId(_)).toBeVisible()}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: function Render({
    withLabel,
    groupVariant,
    divider,
    asNested,
    label,
    showBeforeContent
  }) {
    const level = asNested ? 1 : 0;
    return <DemoPage>
        <DemoPanel width='wide'>
          <DemoTitle>ListItemGroupCustom</DemoTitle>
          <DemoHint>
            Публичный API: \`groupVariant\` (\`subtitle\` / \`subtitleTertiary\`) и отдельный \`divider\`. Третий вид Figma
            (только линия) — \`divider\` без \`label\`: выключи \`[Stories]: withLabel\`.
          </DemoHint>
          <DemoActions align='center'>
            <div className={styles.listFrame} data-test-id={PLAYGROUND_ROOT}>
              {withLabel ? <ListItemGroupCustom label={label} groupVariant={groupVariant} divider={divider} beforeContent={showBeforeContent ? <PlaceholderSVG /> : undefined} level={level} size='s' /> : <ListItemGroupCustom divider level={level} size='s' />}
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
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}))();export{y as Playground,b as __namedExportsOrder,v as default};
//# sourceMappingURL=ListItemGroupCustom.Playground.stories-C69eKqw4.js.map