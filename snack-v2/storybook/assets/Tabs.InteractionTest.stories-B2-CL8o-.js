import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,l as r,m as i,t as a,u as o}from"./iframe-aHi-eIAa.js";import{n as s,t as c}from"./src-Bo-9tVrv.js";import{n as l,t as u}from"./styles.module-xx7oZnK-.js";import{n as d,t as f}from"./testIds-BYK8H20A.js";var p,m,h,g,_,v,y,b;e((()=>{c(),a(),u(),d(),p=t(),{expect:m,fn:h,userEvent:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Snack/Navigation/Tabs/Tabs/Tests/Interaction`,id:`components-tabs-tabs-tests-interaction`,component:s,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{defaultValue:`overview`,onChange:h()},render:e=>(0,p.jsx)(o,{children:(0,p.jsxs)(n,{width:`wide`,children:[(0,p.jsx)(i,{children:`InteractionTest`}),(0,p.jsx)(r,{children:`Клик по табу вызывает onChange со значением.`}),(0,p.jsx)(`div`,{className:l.wide,children:(0,p.jsxs)(s,{...e,children:[(0,p.jsxs)(s.TabBar,{"data-test-id":f.tabBar.root,children:[(0,p.jsx)(s.Tab,{"data-test-id":f.tab.overview,value:`overview`,label:`Overview`}),(0,p.jsx)(s.Tab,{"data-test-id":f.tab.settings,value:`settings`,label:`Settings`}),(0,p.jsx)(s.Tab,{"data-test-id":f.tab.billing,value:`billing`,label:`Billing`})]}),(0,p.jsx)(s.TabContent,{"data-test-id":f.tabContent.overview,value:`overview`,children:`Overview content`}),(0,p.jsx)(s.TabContent,{"data-test-id":f.tabContent.settings,value:`settings`,children:`Settings content`}),(0,p.jsx)(s.TabContent,{"data-test-id":f.tabContent.billing,value:`billing`,children:`Billing content`})]})})]})})},y={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=_(t);await n(`click: selects settings tab and fires onChange with value`,async()=>{await g.click(r.getByTestId(f.tab.settings)),m(e.onChange).toHaveBeenCalledWith(`settings`)}),await n(`click: selects billing tab and fires onChange with value`,async()=>{await g.click(r.getByTestId(f.tab.billing)),m(e.onChange).toHaveBeenLastCalledWith(`billing`)})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: selects settings tab and fires onChange with value', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.tab.settings));
      expect(args.onChange).toHaveBeenCalledWith('settings');
    });
    await step('click: selects billing tab and fires onChange with value', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.tab.billing));
      expect(args.onChange).toHaveBeenLastCalledWith('billing');
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`InteractionTest`]}))();export{y as InteractionTest,b as __namedExportsOrder,v as default};
//# sourceMappingURL=Tabs.InteractionTest.stories-B2-CL8o-.js.map