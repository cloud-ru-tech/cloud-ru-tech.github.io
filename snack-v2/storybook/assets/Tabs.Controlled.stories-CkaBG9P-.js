import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,l as a,m as o,t as s,u as c}from"./iframe-DMWsC78w.js";import{n as l,t as u}from"./src-C1T7TIPX.js";import{n as d,t as f}from"./styles.module-xx7oZnK-.js";import{n as p,t as m}from"./testIds-BcBpfcFk.js";function h({onChange:e}){let[t,n]=(0,g.useState)(`overview`);return(0,_.jsx)(c,{children:(0,_.jsxs)(i,{width:`wide`,children:[(0,_.jsx)(o,{children:`Controlled`}),(0,_.jsx)(a,{children:`Controlled Tabs — onChange синхронизирует значение с парент-стейтом.`}),(0,_.jsx)(`div`,{className:d.wide,children:(0,_.jsxs)(l,{value:t,onChange:t=>{n(t),e?.(t)},children:[(0,_.jsxs)(l.TabBar,{"data-test-id":m.tabBar.root,children:[(0,_.jsx)(l.Tab,{"data-test-id":m.tab.overview,value:`overview`,label:`Overview`}),(0,_.jsx)(l.Tab,{"data-test-id":m.tab.settings,value:`settings`,label:`Settings`}),(0,_.jsx)(l.Tab,{"data-test-id":m.tab.billing,value:`billing`,label:`Billing`})]}),(0,_.jsx)(l.TabContent,{"data-test-id":m.tabContent.overview,value:`overview`,children:`Overview content`}),(0,_.jsx)(l.TabContent,{"data-test-id":m.tabContent.settings,value:`settings`,children:`Settings content`}),(0,_.jsx)(l.TabContent,{"data-test-id":m.tabContent.billing,value:`billing`,children:`Billing content`})]})})]})})}var g,_,v,y,b,x,S,C,w;t((()=>{u(),g=e(n(),1),s(),f(),p(),_=r(),{expect:v,fn:y,userEvent:b,within:x}=__STORYBOOK_MODULE_TEST__,S={title:`Snack/Navigation/Tabs/Tabs/Tests/Controlled`,id:`components-tabs-tabs-tests-controlled`,component:h,parameters:{layout:`fullscreen`,controls:{disable:!0}},args:{onChange:y()}},C={tags:[`test`,`dev`],play:async({args:e,canvasElement:t,step:n})=>{let r=x(t);await n(`click: parent state syncs and onChange fires with new value`,async()=>{await b.click(r.getByTestId(m.tab.settings)),v(e.onChange).toHaveBeenCalledWith(`settings`),await v(r.getByTestId(m.tab.settings)).toHaveAttribute(`aria-selected`,`true`),await v(r.getByTestId(m.tabContent.settings)).toBeVisible()}),await n(`click: parent state advances to billing`,async()=>{await b.click(r.getByTestId(m.tab.billing)),v(e.onChange).toHaveBeenLastCalledWith(`billing`),await v(r.getByTestId(m.tab.billing)).toHaveAttribute(`aria-selected`,`true`)})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click: parent state syncs and onChange fires with new value', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.tab.settings));
      expect(args.onChange).toHaveBeenCalledWith('settings');
      await expect(canvas.getByTestId(TEST_IDS.tab.settings)).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByTestId(TEST_IDS.tabContent.settings)).toBeVisible();
    });
    await step('click: parent state advances to billing', async () => {
      await userEvent.click(canvas.getByTestId(TEST_IDS.tab.billing));
      expect(args.onChange).toHaveBeenLastCalledWith('billing');
      await expect(canvas.getByTestId(TEST_IDS.tab.billing)).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...C.parameters?.docs?.source}}},w=[`Controlled`]}))();export{C as Controlled,w as __namedExportsOrder,S as default};
//# sourceMappingURL=Tabs.Controlled.stories-CkaBG9P-.js.map