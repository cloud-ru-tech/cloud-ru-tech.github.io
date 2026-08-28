import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{d as n,l as r,m as i,t as a,u as o}from"./iframe-CSZ3Qkp5.js";import{c as s,n as c,s as l,t as u,u as d}from"./src-iW7Vjtnk2.js";import{n as f,t as p}from"./styles2.module-Cu9lTr2p.js";import{n as m,t as h}from"./testIds-CX4qu5K12.js";function g(e,t){return{title:e,number:t+1,state:e,onClick:v()}}var _,v,y,b,x,S;e((()=>{u(),a(),l(),p(),m(),_=t(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Snack/Navigation/Stepper/Tests/InteractionStates`,id:`components-stepper-tests-interactionstates`,component:c,parameters:{layout:`fullscreen`,controls:{disable:!0}}},b=[d.Completed,d.Current,d.Loading,d.Waiting,d.Rejected],x={tags:[`test`,`dev`],render:()=>(0,_.jsx)(o,{children:(0,_.jsxs)(n,{width:`narrow`,children:[(0,_.jsx)(i,{children:`InteractionStates`}),(0,_.jsx)(r,{children:`Кружки шагов по состояниям — матрица hover/focus/pressed снимается в visual-спеке.`}),(0,_.jsx)(`div`,{className:f.interactionMatrix,children:b.map((e,t)=>(0,_.jsx)(s,{step:g(e,t),hideTailLine:!0,"data-test-id":h.root},e))})]})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel width='narrow'>
        <DemoTitle>InteractionStates</DemoTitle>
        <DemoHint>Кружки шагов по состояниям — матрица hover/focus/pressed снимается в visual-спеке.</DemoHint>
        <div className={styles.interactionMatrix}>
          {STATES.map((state, index) => <DesktopStep key={state} step={buildStep(state, index)} hideTailLine data-test-id={TEST_IDS.root} />)}
        </div>
      </DemoPanel>
    </DemoPage>
}`,...x.parameters?.docs?.source}}},S=[`InteractionStates`]}))();export{x as InteractionStates,S as __namedExportsOrder,y as default};
//# sourceMappingURL=Stepper.InteractionStates.stories-Bk77g3Rm.js.map