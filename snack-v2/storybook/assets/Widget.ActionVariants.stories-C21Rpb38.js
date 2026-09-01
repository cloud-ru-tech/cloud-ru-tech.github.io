import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{B as n,U as r,c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-B2mzxEaG.js";import{i as u,n as d,o as f,t as p}from"./src-DI4b2Ato.js";import{n as m,t as h}from"./styles.module-D2Nzks2b.js";function g(e){return(0,_.jsx)(d,{header:y,...e,children:`Body`})}var _,v,y,b,x,S,C;e((()=>{n(),p(),c(),h(),_=t(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Cloud servers`,href:`#`},b=v(),x={title:`Uikit Product/Data display/Widget/Examples/ActionVariants`,id:`uikit-product-widget-examples-actionvariants`,parameters:{layout:`fullscreen`,controls:{disable:!0}}},S={tags:[`dev`,`test`],render:()=>(0,_.jsx)(r,{children:(0,_.jsx)(l,{children:(0,_.jsxs)(a,{children:[(0,_.jsx)(s,{children:`Action variants`}),(0,_.jsx)(o,{children:`ActionView branches, ButtonDroplist, helpers и группы пунктов в Droplist.`}),(0,_.jsx)(i,{block:!0,children:(0,_.jsxs)(`div`,{className:m.variantList,children:[(0,_.jsx)(g,{"data-test-id":`widget-outline`,actions:[{variant:u.Outline,label:`Outline`,onClick:v()}]}),(0,_.jsx)(g,{"data-test-id":`widget-tonal`,actions:[{variant:u.Tonal,label:`Tonal`,onClick:v()}]}),(0,_.jsx)(g,{"data-test-id":`widget-function`,actions:[{variant:u.Function,label:`Function`,onClick:v()}]}),(0,_.jsx)(g,{"data-test-id":`widget-simple`,actions:[{variant:u.Simple,label:`Simple`,onClick:v()}]}),(0,_.jsx)(g,{"data-test-id":`widget-tooltip`,actions:[{label:`With tip`,tooltip:{tip:`Action tooltip`},onClick:v()}]}),(0,_.jsx)(g,{wide:!0,"data-test-id":`widget-wide-primary`,actions:[{variant:u.Outline,label:`Primary`,onClick:v()},{variant:u.Function,label:`Skip kebab`,onClick:v()},{variant:u.Droplist,button:{label:`More menu`},list:{items:[{content:{label:`From droplist`},onClick:v()}]}},{label:`Overflow`,onClick:v()},{hidden:!0,label:`Hidden`}]}),(0,_.jsx)(g,{"data-test-id":`widget-droplist-filled`,actions:[{variant:u.Droplist,button:{label:`Menu filled`,buttonType:`filled`},list:{items:[{type:`group`,label:`Group`,divider:!0,items:[{content:{label:`Pick`},onClick:b},{content:{label:`Hidden item`},hidden:!0}]}]}}]}),(0,_.jsx)(g,{"data-test-id":`widget-droplist-function`,actions:[{variant:u.Droplist,button:{label:`Menu function`},list:{items:[{content:{label:`Secondary`},onClick:v()}],closeDroplistOnItemClick:!0}}]}),(0,_.jsx)(g,{"data-test-id":`widget-loading-content`,state:f.Loading,loadingState:{loadingContent:`Custom loading body`},actions:[{label:`Refresh`}]})]})})]})})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: () => <PortalContextProvider>
      <DemoPage>
        <DemoPanel>
          <DemoTitle>Action variants</DemoTitle>
          <DemoHint>ActionView branches, ButtonDroplist, helpers и группы пунктов в Droplist.</DemoHint>
          <DemoActions block>
            <div className={styles.variantList}>
              <VariantWidget data-test-id='widget-outline' actions={[{
              variant: BUTTON_TYPE.Outline,
              label: 'Outline',
              onClick: fn()
            }]} />
              <VariantWidget data-test-id='widget-tonal' actions={[{
              variant: BUTTON_TYPE.Tonal,
              label: 'Tonal',
              onClick: fn()
            }]} />
              <VariantWidget data-test-id='widget-function' actions={[{
              variant: BUTTON_TYPE.Function,
              label: 'Function',
              onClick: fn()
            }]} />
              <VariantWidget data-test-id='widget-simple' actions={[{
              variant: BUTTON_TYPE.Simple,
              label: 'Simple',
              onClick: fn()
            }]} />
              <VariantWidget data-test-id='widget-tooltip' actions={[{
              label: 'With tip',
              tooltip: {
                tip: 'Action tooltip'
              },
              onClick: fn()
            }]} />
              <VariantWidget wide data-test-id='widget-wide-primary' actions={[{
              variant: BUTTON_TYPE.Outline,
              label: 'Primary',
              onClick: fn()
            }, {
              variant: BUTTON_TYPE.Function,
              label: 'Skip kebab',
              onClick: fn()
            }, {
              variant: BUTTON_TYPE.Droplist,
              button: {
                label: 'More menu'
              },
              list: {
                items: [{
                  content: {
                    label: 'From droplist'
                  },
                  onClick: fn()
                }]
              }
            }, {
              label: 'Overflow',
              onClick: fn()
            }, {
              hidden: true,
              label: 'Hidden'
            }]} />
              <VariantWidget data-test-id='widget-droplist-filled' actions={[{
              variant: BUTTON_TYPE.Droplist,
              button: {
                label: 'Menu filled',
                buttonType: 'filled'
              },
              list: {
                items: [{
                  type: 'group',
                  label: 'Group',
                  divider: true,
                  items: [{
                    content: {
                      label: 'Pick'
                    },
                    onClick: onDroplistPick
                  }, {
                    content: {
                      label: 'Hidden item'
                    },
                    hidden: true
                  }]
                }]
              }
            }]} />
              <VariantWidget data-test-id='widget-droplist-function' actions={[{
              variant: BUTTON_TYPE.Droplist,
              button: {
                label: 'Menu function'
              },
              list: {
                items: [{
                  content: {
                    label: 'Secondary'
                  },
                  onClick: fn()
                }],
                closeDroplistOnItemClick: true
              }
            }]} />
              <VariantWidget data-test-id='widget-loading-content' state={WIDGET_STATE.Loading} loadingState={{
              loadingContent: 'Custom loading body'
            }} actions={[{
              label: 'Refresh'
            }]} />
            </div>
          </DemoActions>
        </DemoPanel>
      </DemoPage>
    </PortalContextProvider>
}`,...S.parameters?.docs?.source}}},C=[`ActionVariants`]}))();export{S as ActionVariants,C as __namedExportsOrder,x as default};
//# sourceMappingURL=Widget.ActionVariants.stories-C21Rpb38.js.map