import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-C2bZDhP2.js";import{U as c,t as l}from"./system-DULkXZcO.js";import{a as u,i as d,n as f,t as p,u as m}from"./src-DeWZR_d-.js";import{n as h,t as g}from"./styles.module-gbOfXrOn.js";import{t as _}from"./testIds-oEOk2EVJ.js";var v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{p(),l(),o(),g(),_(),v=t(),{expect:y,fn:b,within:x}=__STORYBOOK_MODULE_TEST__,S=[{label:`Suggestion 1`,icon:(0,v.jsx)(c,{})},{label:`Suggestion 2`,icon:(0,v.jsx)(c,{})},{type:d.Parent,key:`nested-a`,label:`Nested group A`,icon:(0,v.jsx)(c,{}),items:[{label:`Nested A 1`},{label:`Nested A 2`}]},{key:`nested-b`,label:`Nested group B`,icon:(0,v.jsx)(c,{}),items:[{label:`Nested B 1`},{key:`nested-b-level-2`,label:`Nested group B.2`,items:[{label:`Nested B 2.1`},{key:`nested-b-level-3`,label:`Nested group B.2.2`,items:[{label:`Nested B 2.2.1`},{label:`Nested B 2.2.2`}]}]}]}],C={title:`AI/Surfaces/AiSuggestion/AiSuggestionParent`,id:`ai-aisuggestion-aisuggestionparent`,component:f,parameters:{layout:`padded`,design:{type:`figma`,url:`https://www.figma.com/design/tCbbB5RUGyJeBRtjF3dt4d/AI-COMPONENTS?node-id=6467-21511`}},args:{label:`Label text`,icon:(0,v.jsx)(c,{}),size:m.S,disabled:!1,items:S,onExpandedChange:b(),onItemClick:b(),"data-test-id":u.root},argTypes:{label:{control:`text`,description:`Текст на триггере`},icon:{control:!1,description:`Иконка слева от текста`},size:{control:`radio`,options:Object.values(m),description:`Размер (Figma: Mobile Off → s, Mobile On → m)`},disabled:{control:`boolean`,description:`Блокирует взаимодействие`},expanded:{control:`boolean`,description:`Раскрыт (controlled; без пропа — uncontrolled, свёрнут)`},items:{control:!1,description:`Вложенные AiSuggestionSimple и AiSuggestionParent`},onExpandedChange:{action:`expandedChange`},onItemClick:{action:`itemClick`}}},w={tags:[`dev`,`test`],render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Playground`}),(0,v.jsx)(i,{children:`Parent с chevron раскрывает вложенные подсказки в одну строку.`}),(0,v.jsxs)(n,{className:h.playgroundPage,align:`start`,children:[(0,v.jsx)(f,{...e,label:`Label text 1`}),(0,v.jsx)(f,{...e,label:`Label text 2`}),(0,v.jsx)(f,{...e,label:`Label text 3`})]})]})}),play:async({canvasElement:e})=>{let t=x(e).getAllByTestId(u.root)[0];await y(t).toBeVisible(),await y(x(t).getAllByTestId(u.trigger)[0]).toBeVisible()}},T=[`Vision`,`Search`,`Code`,`Image`,`Audio`],E=[{label:`Models`,children:[`GPT-4`,`Claude`,`Gemini`]},{label:`Tools`,children:[`Search`,`Calc`,`Code`,`Image`]},{label:`Sources`,children:[`Web`,`Docs`]},{label:`Format`,children:[`Markdown`,`JSON`,`PDF`,`Audio`]},{label:`Style`,children:[`Concise`,`Detailed`,`Formal`]}],D={tags:[`dev`],render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Single group`}),(0,v.jsx)(i,{children:`Один parent с дочерними чипами — анимация из коробки.`}),(0,v.jsx)(`div`,{className:h.wrap,children:(0,v.jsx)(f,{...e,items:T.map(e=>({label:e,icon:(0,v.jsx)(c,{})}))})})]})})},O={tags:[`dev`],render:e=>(0,v.jsx)(s,{children:(0,v.jsxs)(r,{children:[(0,v.jsx)(a,{children:`Multi group`}),(0,v.jsx)(i,{children:`Несколько parent'ов в одном flex-wrap — layout spring переставляет соседей при toggle.`}),(0,v.jsx)(`div`,{className:`${h.wrap} ${h.wrapNarrow}`,children:E.map(t=>(0,v.jsx)(f,{...e,label:t.label,items:t.children.map(e=>({label:e,icon:(0,v.jsx)(c,{})}))},t.label))})]})})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Parent с chevron раскрывает вложенные подсказки в одну строку.</DemoHint>
        <DemoActions className={styles.playgroundPage} align='start'>
          <AiSuggestionParent {...args} label='Label text 1' />
          <AiSuggestionParent {...args} label='Label text 2' />
          <AiSuggestionParent {...args} label='Label text 3' />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    const root = within(canvasElement).getAllByTestId(TEST_IDS.root)[0];
    await expect(root).toBeVisible();
    await expect(within(root).getAllByTestId(TEST_IDS.trigger)[0]).toBeVisible();
  }
}`,...w.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Single group</DemoTitle>
        <DemoHint>Один parent с дочерними чипами — анимация из коробки.</DemoHint>
        <div className={styles.wrap}>
          <AiSuggestionParent {...args} items={childLabels.map(label => ({
          label,
          icon: <PlaceholderSVG />
        }))} />
        </div>
      </DemoPanel>
    </DemoPage>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Multi group</DemoTitle>
        <DemoHint>Несколько parent&apos;ов в одном flex-wrap — layout spring переставляет соседей при toggle.</DemoHint>
        <div className={\`\${styles.wrap} \${styles.wrapNarrow}\`}>
          {multiGroups.map(group => <AiSuggestionParent key={group.label} {...args} label={group.label} items={group.children.map(label => ({
          label,
          icon: <PlaceholderSVG />
        }))} />)}
        </div>
      </DemoPanel>
    </DemoPage>
}`,...O.parameters?.docs?.source}}},k=[`Playground`,`SingleGroup`,`MultiGroup`]}))();export{O as MultiGroup,w as Playground,D as SingleGroup,k as __namedExportsOrder,C as default};
//# sourceMappingURL=AiSuggestionParent.Playground.stories-4AJVrWrQ.js.map