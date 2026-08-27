import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{t as n}from"./react-Bg-8jzDh.js";import{n as r}from"./classnames-iuquYaxc.js";import{c as i,d as a,l as o,m as s,t as c,u as l}from"./iframe-BRJzdrhE.js";import{a as u,t as d}from"./src-CqxI6u0w.js";import{d as f,r as p,s as m,t as h}from"./src-Du788Ybz.js";import{n as g,t as _}from"./testIds-BQtrq6hu.js";function v(){let e=(0,y.useRef)(null),t=(0,y.useRef)(null),n=(0,y.useRef)(null),r=(0,y.useRef)(null),i=(0,y.useRef)(null),[a,o]=(0,y.useState)(``),s=p({clearButtonRef:t,showClearButton:a.length>0,onClear:()=>o(``),size:`s`}),c=m({inputRef:e,prefixButtons:[{id:`p1`,active:!0,show:!0,ref:n,render:({key:e,tabIndex:t,ref:n,onKeyDown:r,onClick:i})=>(0,b.jsx)(u,{innerRef:n,tabIndex:t,onKeyDown:r,onClick:i,label:`P1`,view:`outline`,appearance:`neutral`,size:`s`,"data-test-id":w.prefix1},e)},{id:`p2`,active:!0,show:!0,ref:r,render:({key:e,tabIndex:t,ref:n,onKeyDown:r,onClick:i})=>(0,b.jsx)(u,{innerRef:n,tabIndex:t,onKeyDown:r,onClick:i,label:`P2`,view:`outline`,appearance:`neutral`,size:`s`,"data-test-id":w.prefix2},e)}],postfixButtons:[s,{id:`pf1`,active:!0,show:!0,ref:i,render:({key:e,tabIndex:t,ref:n,onKeyDown:r,onClick:i})=>(0,b.jsx)(u,{innerRef:n,tabIndex:t,onKeyDown:r,onClick:i,label:`PF1`,view:`outline`,appearance:`neutral`,size:`s`,"data-test-id":w.postfix1},e)}],readonly:!1,submitKeys:[`Enter`]});return(0,b.jsxs)(`div`,{children:[c.prefixButtons,(0,b.jsx)(f,{ref:e,value:a,onChange:o,onKeyDown:c.onInputKeyDown,tabIndex:c.inputTabIndex,"data-test-id":w.root,placeholder:`nav fixture`}),c.postfixButtons]})}var y,b,x,S,C,w,T,E,D;t((()=>{d(),h(),y=e(n(),1),c(),g(),b=r(),{expect:x,userEvent:S,within:C}=__STORYBOOK_MODULE_TEST__,w={root:_.root,prefix1:`fixture-prefix-1`,prefix2:`fixture-prefix-2`,postfix1:`fixture-postfix-1`},T={title:`Snack/Foundation & utilities/InputPrivate/Tests/NavigationFixture`,id:`components-inputprivate-tests-navigationfixture`,parameters:{layout:`fullscreen`,figma:{disable:!0},controls:{disable:!0}}},E={tags:[`test`,`dev`],render:()=>(0,b.jsx)(l,{children:(0,b.jsxs)(a,{children:[(0,b.jsx)(s,{children:`NavigationFixture`}),(0,b.jsx)(o,{children:`Fixture-стори для покрытия arrow-навигации useButtonNavigation.`}),(0,b.jsx)(i,{align:`center`,children:(0,b.jsx)(v,{})})]})}),play:async({canvasElement:e,step:t})=>{let n=C(e),r=n.getByTestId(w.root),i=n.getByTestId(w.prefix1),a=n.getByTestId(w.prefix2),o=n.getByTestId(w.postfix1);await t(`ArrowLeft at cursor=0 → focuses prefix2 (rightmost prefix)`,async()=>{r.focus(),r.setSelectionRange(0,0),await S.keyboard(`{ArrowLeft}`),x(a).toBe(document.activeElement)}),await t(`ArrowLeft on prefix2 → moves to prefix1`,async()=>{await S.keyboard(`{ArrowLeft}`),x(i).toBe(document.activeElement)}),await t(`ArrowLeft on prefix1 → stays on prefix1`,async()=>{await S.keyboard(`{ArrowLeft}`),x(i).toBe(document.activeElement)}),await t(`ArrowRight on prefix1 → moves to prefix2`,async()=>{await S.keyboard(`{ArrowRight}`),x(a).toBe(document.activeElement)}),await t(`ArrowRight on prefix2 → returns focus to input`,async()=>{await S.keyboard(`{ArrowRight}`),x(r).toBe(document.activeElement)}),await t(`type + ArrowRight at cursor end → focuses clearButton (first visible postfix)`,async()=>{await S.type(r,`x`),r.setSelectionRange(r.value.length,r.value.length),await S.keyboard(`{ArrowRight}`);let e=n.getByTestId(`button-clear-value`);x(e).toBe(document.activeElement)}),await t(`click postfix1 → resets tabIndices (input regains tabIndex=0)`,async()=>{await S.click(o),await new Promise(e=>setTimeout(e,10)),x(r.getAttribute(`tabindex`)).toBe(`0`)}),await t(`Enter on postfix: submitKeys branch resets input tabIndex`,async()=>{r.focus(),r.setSelectionRange(r.value.length,r.value.length),await S.keyboard(`{ArrowRight}`),await new Promise(e=>setTimeout(e,10)),x(r.getAttribute(`tabindex`)).toBe(`-1`),await S.keyboard(`{Enter}`),await new Promise(e=>setTimeout(e,10)),x(r.getAttribute(`tabindex`)).toBe(`0`)})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <DemoPage>
      <DemoPanel>
        <DemoTitle>NavigationFixture</DemoTitle>
        <DemoHint>Fixture-стори для покрытия arrow-навигации useButtonNavigation.</DemoHint>
        <DemoActions align='center'>
          <NavigationFixtureBody />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId(FIXTURE_TEST_IDS.root) as HTMLInputElement;
    const p1 = canvas.getByTestId(FIXTURE_TEST_IDS.prefix1);
    const p2 = canvas.getByTestId(FIXTURE_TEST_IDS.prefix2);
    const pf1 = canvas.getByTestId(FIXTURE_TEST_IDS.postfix1);
    const clearButtonTestId = 'button-clear-value';
    await step('ArrowLeft at cursor=0 → focuses prefix2 (rightmost prefix)', async () => {
      input.focus();
      input.setSelectionRange(0, 0);
      await userEvent.keyboard('{ArrowLeft}');
      expect(p2).toBe(document.activeElement);
    });
    await step('ArrowLeft on prefix2 → moves to prefix1', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(p1).toBe(document.activeElement);
    });
    await step('ArrowLeft on prefix1 → stays on prefix1', async () => {
      await userEvent.keyboard('{ArrowLeft}');
      expect(p1).toBe(document.activeElement);
    });
    await step('ArrowRight on prefix1 → moves to prefix2', async () => {
      await userEvent.keyboard('{ArrowRight}');
      expect(p2).toBe(document.activeElement);
    });
    await step('ArrowRight on prefix2 → returns focus to input', async () => {
      await userEvent.keyboard('{ArrowRight}');
      expect(input).toBe(document.activeElement);
    });
    await step('type + ArrowRight at cursor end → focuses clearButton (first visible postfix)', async () => {
      await userEvent.type(input, 'x');
      input.setSelectionRange(input.value.length, input.value.length);
      await userEvent.keyboard('{ArrowRight}');
      const clearButton = canvas.getByTestId(clearButtonTestId);
      expect(clearButton).toBe(document.activeElement);
    });
    await step('click postfix1 → resets tabIndices (input regains tabIndex=0)', async () => {
      await userEvent.click(pf1);
      // onButtonClick → runAfterRerender(setInitialTabIndices) — input tabindex should be 0
      await new Promise(r => setTimeout(r, 10));
      expect(input.getAttribute('tabindex')).toBe('0');
    });
    await step('Enter on postfix: submitKeys branch resets input tabIndex', async () => {
      // Navigate input → postfix via ArrowRight: state sets inputTabIndex=-1
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      await userEvent.keyboard('{ArrowRight}');
      await new Promise(r => setTimeout(r, 10));
      expect(input.getAttribute('tabindex')).toBe('-1');

      // Enter on focused postfix triggers submitKeys → setInitialTabIndices
      await userEvent.keyboard('{Enter}');
      await new Promise(r => setTimeout(r, 10));
      expect(input.getAttribute('tabindex')).toBe('0');
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`NavigationFixture`]}))();export{E as NavigationFixture,D as __namedExportsOrder,T as default};
//# sourceMappingURL=InputPrivate.NavigationFixture.stories-C1KNcclj.js.map