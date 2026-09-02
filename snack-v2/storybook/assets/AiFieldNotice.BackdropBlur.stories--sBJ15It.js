import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-D0mM8I4K.js";import{a as u,t as d}from"./src-B9B_TrVp.js";import{d as f,f as p,g as m,m as h,n as g,o as _,p as v,t as y}from"./testIds-CeCLKIuh.js";import{a as b,i as x,r as S,t as C}from"./playgroundShared-BhZJMVk-.js";import{n as w,t as T}from"./stories.module-C33z7nHF.js";function E(){return(0,O.jsxs)(`div`,{className:w.silhouettes,"aria-hidden":!0,children:[(0,O.jsxs)(`div`,{className:w.silhouetteRow,children:[(0,O.jsx)(`span`,{className:w.silhouetteAvatar}),(0,O.jsxs)(`div`,{className:w.silhouetteBubbleWide,children:[(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`full`}),(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`medium`}),(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`short`})]})]}),(0,O.jsx)(`div`,{className:w.silhouetteRowReverse,children:(0,O.jsxs)(`div`,{className:w.silhouetteBubble,children:[(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`full`}),(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`short`})]})}),(0,O.jsxs)(`div`,{className:w.silhouetteCodeBlock,children:[(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`full`}),(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`medium`}),(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`full`}),(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`short`})]}),(0,O.jsxs)(`div`,{className:w.silhouetteRow,children:[(0,O.jsx)(`span`,{className:w.silhouetteAvatar}),(0,O.jsxs)(`div`,{className:w.silhouetteBubble,children:[(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`medium`}),(0,O.jsx)(`span`,{className:w.silhouetteLine,"data-width":`full`})]})]})]})}function D({background:e,children:t}){return(0,O.jsxs)(`div`,{className:w.playgroundStage,"data-show-silhouettes":`true`,children:[e??(0,O.jsx)(E,{}),(0,O.jsx)(`div`,{className:w.noticeAnchor,children:t})]})}var O,k=t((()=>{T(),O=r()}));function A(){return(0,M.jsxs)(`div`,{className:w.silhouettes,"aria-hidden":!0,children:[(0,M.jsxs)(`div`,{className:w.chatRow,children:[(0,M.jsx)(`span`,{className:w.chatAvatar}),(0,M.jsx)(`p`,{className:`${w.chatBubble} ${w.chatBubbleWide}`,children:I.assistantIntro})]}),(0,M.jsx)(`div`,{className:w.chatRowReverse,children:(0,M.jsx)(`p`,{className:`${w.chatBubble} ${w.chatBubbleNarrow} ${w.chatBubbleAlignEnd}`,children:I.userQuestion})}),(0,M.jsxs)(`div`,{className:w.chatRow,children:[(0,M.jsx)(`span`,{className:w.chatAvatar}),(0,M.jsx)(`p`,{className:`${w.chatBubble} ${w.chatBubbleWide}`,children:I.assistantSteps})]}),(0,M.jsx)(`div`,{className:w.chatRowReverse,children:(0,M.jsx)(`p`,{className:`${w.chatBubble} ${w.chatBubbleNarrow} ${w.chatBubbleAlignEnd}`,children:I.userThanks})})]})}var j,M,N,P,F,I,L,R,z;t((()=>{d(),v(),j=e(n(),1),c(),b(),p(),C(),k(),T(),g(),M=r(),{expect:N,fn:P,within:F}=__STORYBOOK_MODULE_TEST__,I={assistantIntro:`Чтобы создать виртуальную машину, откройте раздел Compute и нажмите «Создать ВМ». Я могу провести вас по шагам.`,userQuestion:`А как подключиться по SSH после создания?`,assistantSteps:`Сгенерируйте ключ в консоли, добавьте публичную часть в метаданные ВМ и подключитесь через стандартный клиент.`,userThanks:`Спасибо, всё понятно.`},L={title:`AI/Surfaces/AiFieldNotice/Examples/BackdropBlur`,id:`ai-aifieldnotice-examples-backdropblur`,component:h,parameters:{layout:`fullscreen`,controls:{disable:!0}}},R={tags:[`dev`],render:function(){let[e,t]=(0,j.useState)(!1),n=x({...S,variant:m.Queue,queue:{..._,open:e,onOpenChange:t},onActionClick:P()}),r=x({...S,...f,onActionClick:P()});return(0,M.jsx)(l,{children:(0,M.jsxs)(a,{children:[(0,M.jsx)(s,{children:`Backdrop blur`}),(0,M.jsx)(o,{children:"Демо frosted-glass (`backdrop-filter: blur`) на AdviceContainer"}),(0,M.jsx)(i,{align:`start`,children:(0,M.jsx)(D,{background:(0,M.jsx)(A,{}),children:(0,M.jsxs)(`div`,{className:w.noticeStack,children:[(0,M.jsx)(h,{...n,"data-test-id":y.root}),(0,M.jsx)(h,{...r,"data-test-id":`${y.root}-vm-agent`})]})})})]})})},play:async({canvasElement:e})=>{let t=F(e).getByTestId(y.root);await N(t).toBeVisible(),await N(F(t).getByTestId(u.advice)).toBeVisible()}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: function Render() {
    const [queueOpen, setQueueOpen] = useState(false);
    const noticeProps = buildNoticeProps({
      ...playgroundArgs,
      variant: VARIANT.Queue,
      queue: {
        ...FIXTURE_QUEUE_PROPS,
        open: queueOpen,
        onOpenChange: setQueueOpen
      },
      onActionClick: fn()
    });
    const vmAgentNoticeProps = buildNoticeProps({
      ...playgroundArgs,
      ...FIXTURE_VM_AGENT_NOTICE,
      onActionClick: fn()
    });
    return <DemoPage>
        <DemoPanel>
          <DemoTitle>Backdrop blur</DemoTitle>
          <DemoHint>Демо frosted-glass (\`backdrop-filter: blur\`) на AdviceContainer</DemoHint>
          <DemoActions align='start'>
            <PlaygroundStage background={<ChatBackground />}>
              <div className={styles.noticeStack}>
                <AiFieldNotice {...noticeProps} data-test-id={TEST_IDS.root} />
                <AiFieldNotice {...vmAgentNoticeProps} data-test-id={\`\${TEST_IDS.root}-vm-agent\`} />
              </div>
            </PlaygroundStage>
          </DemoActions>
        </DemoPanel>
      </DemoPage>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const root = canvas.getByTestId(TEST_IDS.root);
    await expect(root).toBeVisible();
    await expect(within(root).getByTestId(BANNER_TEST_IDS.advice)).toBeVisible();
  }
}`,...R.parameters?.docs?.source}}},z=[`BackdropBlur`]}))();export{R as BackdropBlur,z as __namedExportsOrder,L as default};
//# sourceMappingURL=AiFieldNotice.BackdropBlur.stories--sBJ15It.js.map