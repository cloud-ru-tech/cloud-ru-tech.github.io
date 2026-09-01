import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{n,t as r}from"./classnames-iuquYaxc.js";import{Tn as i,c as a,d as o,l as s,m as c,t as l,u,wn as d}from"./iframe-XppXgSyX.js";import{ct as f,lt as p}from"./helperComponents-DsYeb8Y5.js";import{i as m,t as h}from"./src-DIuSCcgG.js";import{o as g}from"./testIds-DqAoV55D.js";function _(e,t,n){if(![e,t,n].every(e=>e===void 0))return{hours:e,minutes:t,seconds:n}}var v=t((()=>{})),y,b,x,S,C,w,T,E=t((()=>{y=`_story_votyx_4`,b=`_storyWrapper_votyx_15`,x=`_valueHolder_votyx_21`,S=`_scrollS_votyx_25`,C=`_scrollM_votyx_29`,w=`_scrollL_votyx_33`,T={story:y,storyWrapper:b,valueHolder:x,scrollS:S,scrollM:C,scrollL:w}})),D,O,k,A,j,M,N,P,F,I,L;t((()=>{D=e(r(),1),l(),i(),h(),g(),v(),E(),O=n(),{useArgs:k,useMemo:A}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:j,within:M}=__STORYBOOK_MODULE_TEST__,N={title:`Snack/Inputs & Forms/Calendar/Time Picker`,id:`components-calendar-time-picker`,component:m,parameters:{layout:`fullscreen`,readme:{content:d},design:{type:`figma`,url:`https://www.figma.com/design/aNPU3MHwRJiEwbk5F82zux/Snack-Ui-Kit-variables?node-id=3553-18435&m=dev`}}},P={[f.S]:T.scrollS,[f.M]:T.scrollM,[f.L]:T.scrollL},F=({size:e,showSeconds:t,fitToContainer:n,withFixedSizes:r,withBackground:i,valueHours:l,valueMinutes:d,valueSeconds:h,defaultValueHours:g,defaultValueMinutes:v,defaultValueSeconds:y})=>{let[,b]=k(),x=A(()=>_(l,d,h),[l,d,h]),S=A(()=>_(g,v,y),[g,v,y]),C=e=>{b({valueHours:e.hours??void 0,valueMinutes:e.minutes??void 0,valueSeconds:e.seconds??void 0})},w=String(l).padStart(2,`0`),E=String(d).padStart(2,`0`),j=String(h).padStart(2,`0`);return(0,O.jsx)(u,{children:(0,O.jsxs)(o,{children:[(0,O.jsx)(c,{children:`Playground`}),(0,O.jsx)(s,{children:`Барабан выбора времени: часы, минуты и опционально секунды.`}),(0,O.jsx)(a,{align:`center`,children:(0,O.jsxs)(`div`,{className:(0,D.default)(T.story,r&&P[e||f.S]),"data-with-background":i||void 0,children:[(0,O.jsx)(m,{size:e,showSeconds:t,fitToContainer:n,defaultValue:S,value:x,onChangeValue:C,"data-test-id":p.timePickerPlayground}),(0,O.jsx)(`div`,{className:T.valueHolder,"data-test-id":p.timePickerValueHolder,children:x?`${w}:${E}:${j}`:``})]})})]})})},I={tags:[`dev`,`test`],args:{showSeconds:!0,size:f.S,withFixedSizes:!0,fitToContainer:!0,withBackground:!0,valueHours:void 0,valueMinutes:void 0,valueSeconds:void 0,defaultValueHours:void 0,defaultValueMinutes:void 0,defaultValueSeconds:void 0},argTypes:{size:{control:`radio`,options:Object.values(f)},valueHours:{name:`[value] hours`,control:{type:`number`}},valueMinutes:{name:`[value] minutes`,control:{type:`number`}},valueSeconds:{name:`[value] seconds`,control:{type:`number`}},defaultValueHours:{name:`[defaultValue] hours`,control:{type:`number`}},defaultValueMinutes:{name:`[defaultValue] minutes`,control:{type:`number`}},defaultValueSeconds:{name:`[defaultValue] seconds`,control:{type:`number`}},withFixedSizes:{name:`[Stories]: Fixed sizes of story`},withBackground:{name:`[Stories]: Enable white background for story wrapper`,control:{type:`boolean`}}},render:F,play:async({canvasElement:e})=>{await j(M(e).getByTestId(`timepicker-playground`)).toBeVisible()}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    showSeconds: true,
    size: SIZE.S,
    withFixedSizes: true,
    fitToContainer: true,
    withBackground: true,
    valueHours: undefined,
    valueMinutes: undefined,
    valueSeconds: undefined,
    defaultValueHours: undefined,
    defaultValueMinutes: undefined,
    defaultValueSeconds: undefined
  },
  argTypes: {
    size: {
      control: 'radio',
      options: Object.values(SIZE)
    },
    valueHours: {
      name: '[value] hours',
      control: {
        type: 'number'
      }
    },
    valueMinutes: {
      name: '[value] minutes',
      control: {
        type: 'number'
      }
    },
    valueSeconds: {
      name: '[value] seconds',
      control: {
        type: 'number'
      }
    },
    defaultValueHours: {
      name: '[defaultValue] hours',
      control: {
        type: 'number'
      }
    },
    defaultValueMinutes: {
      name: '[defaultValue] minutes',
      control: {
        type: 'number'
      }
    },
    defaultValueSeconds: {
      name: '[defaultValue] seconds',
      control: {
        type: 'number'
      }
    },
    withFixedSizes: {
      name: '[Stories]: Fixed sizes of story'
    },
    withBackground: {
      name: '[Stories]: Enable white background for story wrapper',
      control: {
        type: 'boolean'
      }
    }
  },
  render: Template,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId('timepicker-playground')).toBeVisible();
  }
}`,...I.parameters?.docs?.source}}},L=[`Playground`]}))();export{I as Playground,L as __namedExportsOrder,N as default};
//# sourceMappingURL=TimePicker.Playground.stories-DjrTtQvH.js.map