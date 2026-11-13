import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{ft as n,ot as r}from"./iframe-fMkFoqWD.js";import{a as i,t as a}from"./src-BW84dnch2.js";import{i as o,n as s,r as c,t as l}from"./testIds-Cw6KqYmK.js";import{n as u,t as d}from"./styles.module-C7t8kZkR.js";import{c as f,d as p,h as m,l as h,m as g,v as _}from"./demoData-wlnHfrgB.js";import{n as v,t as y}from"./sidebarGutter--9uy9WGg.js";var b,x,S,C,w,T,E,D,O,k,A;e((()=>{r(),a(),c(),_(),y(),d(),s(),b=t(),{expect:x,fn:S,within:C}=__STORYBOOK_MODULE_TEST__,w={title:`Uikit Product/Layout & containers/PageLayout/PageServices`,id:`uikit-product-pagelayout-pageservices`,component:o,parameters:{layout:`fullscreen`},args:{title:`vm-0c7afd`,slotAfterTitle:f,autoHeight:!0,limitContentMaxWidth:!1,actions:h,maxVisibleActionsItems:1,sidebar:{items:g,header:p,selected:`info`},children:(0,b.jsx)(m,{}),"data-test-id":l.pageServices.root,showActions:!0,showSidebar:!0,showSlotAfterTitle:!0},argTypes:{autoHeight:{control:`boolean`},limitContentMaxWidth:{control:`boolean`},actions:{table:{disable:!0}},sidebar:{table:{disable:!0}},children:{table:{disable:!0}},slotBeforeTitle:{table:{disable:!0}},slotAfterTitle:{table:{disable:!0}},showActions:{name:`[Stories]: showActions`,control:`boolean`},showSidebar:{name:`[Stories]: showSidebar`,control:`boolean`},showSlotAfterTitle:{name:`[Stories]: showSlotAfterTitle`,control:`boolean`}}},T={tags:[`dev`,`test`],render:({showActions:e,showSidebar:t,showSlotAfterTitle:r,...i},{globals:a})=>(0,b.jsx)(`div`,{className:v&&!n(a.layoutType)?`${u.fullPage} ${u.sidebarGutter}`:u.fullPage,children:(0,b.jsx)(o,{...i,actions:e?i.actions:void 0,sidebar:t?i.sidebar:void 0,slotAfterTitle:r?i.slotAfterTitle:void 0})}),play:async({canvasElement:e})=>{await x(C(e).getByTestId(l.pageServices.root)).toBeVisible()}},E=S(),D={...T,args:{maxVisibleActionsItems:2,actions:[...h.slice(0,1),{variant:`custom`,render:()=>({default:(0,b.jsx)(i,{label:`Создать снимок диска`,view:`outline`,onClick:E}),asListItem:{content:{label:`Создать снимок диска`},onClick:E}})}]}},O=S(()=>({default:(0,b.jsx)(i,{label:`Скрытое действие`}),asListItem:{content:{label:`Скрытое действие`}}})),k={...D,args:{...D.args,actions:[{variant:`custom`,hidden:!0,render:O},...D.args?.actions??[],{variant:`custom`,hidden:!0,render:O}]},play:async()=>{await x(O).not.toHaveBeenCalled()}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: ({
    showActions,
    showSidebar,
    showSlotAfterTitle,
    ...args
  }, {
    globals
  }) => <div className={withSidebarGutter && !isMobileLayout(globals.layoutType as LayoutType) ? \`\${styles.fullPage} \${styles.sidebarGutter}\` : styles.fullPage}>
      <PageServices {...args} actions={showActions ? args.actions : undefined} sidebar={showSidebar ? args.sidebar : undefined} slotAfterTitle={showSlotAfterTitle ? args.slotAfterTitle : undefined} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.pageServices.root)).toBeVisible();
  }
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...Playground,
  args: {
    maxVisibleActionsItems: 2,
    actions: [...SERVICE_ACTIONS.slice(0, 1), {
      variant: 'custom',
      render: () => ({
        default: <Button label='Создать снимок диска' view='outline' onClick={handleCustomAction} />,
        asListItem: {
          content: {
            label: 'Создать снимок диска'
          },
          onClick: handleCustomAction
        }
      })
    }]
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...CustomActions,
  args: {
    ...CustomActions.args,
    actions: [{
      variant: 'custom',
      hidden: true,
      render: renderHiddenAction
    }, ...(CustomActions.args?.actions ?? []), {
      variant: 'custom',
      hidden: true,
      render: renderHiddenAction
    }]
  },
  play: async () => {
    await expect(renderHiddenAction).not.toHaveBeenCalled();
  }
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`CustomActions`,`HiddenCustomActions`]}))();export{D as CustomActions,k as HiddenCustomActions,T as Playground,A as __namedExportsOrder,w as default};
//# sourceMappingURL=PageServices.Playground.stories-C_aLthBq.js.map