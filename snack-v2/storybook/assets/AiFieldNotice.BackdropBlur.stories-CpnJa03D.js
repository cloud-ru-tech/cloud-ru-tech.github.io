import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{d as i,f as a,g as o,p as s,t as c,u as l}from"./iframe-CH0ThVYh.js";import{d as u,f as d,g as f,m as p,n as m,o as h,p as g,t as _}from"./testIds-DUBIFUK2.js";import{a as v,i as y,r as b,t as x}from"./playgroundShared-BuYt9VQS.js";import{n as S,t as C}from"./stories.module-DEx4Q-Qf.js";function w(){return(0,E.jsxs)(`div`,{className:S.silhouettes,"aria-hidden":!0,children:[(0,E.jsxs)(`div`,{className:S.silhouetteRow,children:[(0,E.jsx)(`span`,{className:S.silhouetteAvatar}),(0,E.jsxs)(`div`,{className:S.silhouetteBubbleWide,children:[(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`full`}),(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`medium`}),(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`short`})]})]}),(0,E.jsx)(`div`,{className:S.silhouetteRowReverse,children:(0,E.jsxs)(`div`,{className:S.silhouetteBubble,children:[(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`full`}),(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`short`})]})}),(0,E.jsxs)(`div`,{className:S.silhouetteCodeBlock,children:[(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`full`}),(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`medium`}),(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`full`}),(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`short`})]}),(0,E.jsxs)(`div`,{className:S.silhouetteRow,children:[(0,E.jsx)(`span`,{className:S.silhouetteAvatar}),(0,E.jsxs)(`div`,{className:S.silhouetteBubble,children:[(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`medium`}),(0,E.jsx)(`span`,{className:S.silhouetteLine,"data-width":`full`})]})]})]})}function T({background:e,children:t}){return(0,E.jsxs)(`div`,{className:S.playgroundStage,"data-show-silhouettes":`true`,children:[e??(0,E.jsx)(w,{}),(0,E.jsx)(`div`,{className:S.noticeAnchor,children:t})]})}var E,D=t((()=>{C(),E=r()}));function O(){return(0,A.jsxs)(`div`,{className:S.silhouettes,"aria-hidden":!0,children:[(0,A.jsxs)(`div`,{className:S.chatRow,children:[(0,A.jsx)(`span`,{className:S.chatAvatar}),(0,A.jsx)(`p`,{className:`${S.chatBubble} ${S.chatBubbleWide}`,children:P.assistantIntro})]}),(0,A.jsx)(`div`,{className:S.chatRowReverse,children:(0,A.jsx)(`p`,{className:`${S.chatBubble} ${S.chatBubbleNarrow} ${S.chatBubbleAlignEnd}`,children:P.userQuestion})}),(0,A.jsxs)(`div`,{className:S.chatRow,children:[(0,A.jsx)(`span`,{className:S.chatAvatar}),(0,A.jsx)(`p`,{className:`${S.chatBubble} ${S.chatBubbleWide}`,children:P.assistantSteps})]}),(0,A.jsx)(`div`,{className:S.chatRowReverse,children:(0,A.jsx)(`p`,{className:`${S.chatBubble} ${S.chatBubbleNarrow} ${S.chatBubbleAlignEnd}`,children:P.userThanks})})]})}var k,A,j,M,N,P,F,I,L;t((()=>{g(),k=e(n(),1),c(),v(),d(),x(),D(),C(),m(),A=r(),{expect:j,fn:M,within:N}=__STORYBOOK_MODULE_TEST__,P={assistantIntro:`Чтобы создать виртуальную машину, откройте раздел Compute и нажмите «Создать ВМ». Я могу провести вас по шагам.`,userQuestion:`А как подключиться по SSH после создания?`,assistantSteps:`Сгенерируйте ключ в консоли, добавьте публичную часть в метаданные ВМ и подключитесь через стандартный клиент.`,userThanks:`Спасибо, всё понятно.`},F={title:`AI/Surfaces/AiFieldNotice/Examples/BackdropBlur`,id:`ai-aifieldnotice-examples-backdropblur`,component:p,parameters:{layout:`fullscreen`,controls:{disable:!0}}},I={tags:[`dev`],render:function(){let[e,t]=(0,k.useState)(!1),n=y({...b,variant:f.Queue,queue:{...h,open:e,onOpenChange:t},onActionClick:M()}),r=y({...b,...u,onActionClick:M()});return(0,A.jsx)(a,{children:(0,A.jsxs)(s,{children:[(0,A.jsx)(o,{children:`Backdrop blur`}),(0,A.jsx)(i,{children:"Демо frosted-glass (`backdrop-filter: blur`) на AdviceContainer"}),(0,A.jsx)(l,{align:`start`,children:(0,A.jsx)(T,{background:(0,A.jsx)(O,{}),children:(0,A.jsxs)(`div`,{className:S.noticeStack,children:[(0,A.jsx)(p,{...n,"data-test-id":_.root}),(0,A.jsx)(p,{...r,"data-test-id":`${_.root}-vm-agent`})]})})})]})})},play:async({canvasElement:e})=>{let t=N(e).getByTestId(_.root);await j(t).toBeVisible();let n=N(t).getByTestId(_.banner);await j(getComputedStyle(n).backdropFilter).not.toBe(`none`)}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
    const banner = within(root).getByTestId(TEST_IDS.banner);
    await expect(getComputedStyle(banner).backdropFilter).not.toBe('none');
  }
}`,...I.parameters?.docs?.source}}},L=[`BackdropBlur`]}))();export{I as BackdropBlur,L as __namedExportsOrder,F as default};
//# sourceMappingURL=AiFieldNotice.BackdropBlur.stories-CpnJa03D.js.map