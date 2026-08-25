import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{a as c,t as l}from"./src-DqYGhDZI.js";import{n as u,t as d}from"./testIds-zOjMf_tk.js";import{n as f,t as p}from"./stories.module-Cv0zmHWk.js";var m,h,g,_,v,y;e((()=>{l(),o(),u(),p(),m=t(),h=[{id:`x`,content:{label:`Content text`,description:`Description text`,caption:`Caption`}}],g=[{id:`y`,content:{label:`Content text`,description:`Description text`,caption:`Caption`}}],_={title:`Snack/Data display/List/List/Tests/InteractionStates`,id:`components-list-list-tests-interactionstates`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},v={tags:[`test`,`dev`],render:()=>(0,m.jsx)(s,{children:(0,m.jsxs)(r,{width:`narrow`,children:[(0,m.jsx)(a,{children:`InteractionStates fixture`}),(0,m.jsx)(i,{children:`Две строки variant-state-matrix.png: single checked (activatedOnBackground) и multiple (emptyNeutralOnBackground, чекбокс в кадре).`}),(0,m.jsxs)(n,{align:`center`,children:[(0,m.jsx)(`div`,{className:f.listFrame,children:(0,m.jsx)(c,{"data-test-id":d.list.root,size:`m`,marker:!0,items:h,selection:{mode:`single`,defaultValue:`x`}})}),(0,m.jsx)(`div`,{className:f.listFrame,children:(0,m.jsx)(c,{size:`m`,items:g,selection:{mode:`multiple`,defaultValue:[]}})})]})]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>InteractionStates fixture</DemoTitle>
        <DemoHint>
          Две строки variant-state-matrix.png: single checked (activatedOnBackground) и multiple
          (emptyNeutralOnBackground, чекбокс в кадре).
        </DemoHint>
        <DemoActions align='center'>
          <div className={styles.listFrame}>
            <List data-test-id={TEST_IDS.list.root} size='m' marker items={items} selection={{
            mode: 'single',
            defaultValue: 'x'
          }} />
          </div>
          {/* Без data-test-id: спек адресует item'ы через itemTestId('x') / itemTestId('y'). */}
          <div className={styles.listFrame}>
            <List size='m' items={multipleItems} selection={{
            mode: 'multiple',
            defaultValue: []
          }} />
          </div>
        </DemoActions>
      </DemoPanel>
    </DemoPage>
}`,...v.parameters?.docs?.source}}},y=[`InteractionStatesFixture`]}))();export{v as InteractionStatesFixture,y as __namedExportsOrder,_ as default};
//# sourceMappingURL=List.InteractionStatesFixture.stories-BPrnZOrU.js.map