import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as h}from"./index-CJ_LmFaV.js";import{c as s,a as T,b as C,S,C as O,d as _,T as k,e as a,f as t,B as i}from"./Layout-Beon5GwF.js";import{B as n}from"./ButtonSimple-CQgAGDcK.js";import{P as m}from"./index-DW7JD-Lj.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C8tV8B5x.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-S9IyB2Vz.js";import"./index-osW-_rgC.js";import"./index-x7ArlFfL.js";import"./index-Df-dmYFR.js";import"./index-Cxdp8tlc.js";import"./index-CSMTAo6Q.js";import"./index-00FjgX9j.js";import"./index-BTBTknnI.js";import"./index-C3gycbXm.js";import"./index-CNC7znSK.js";import"./index-9-iRZIMV.js";import"./index-DRtCvpDZ.js";import"./index-C11pXQBT.js";import"./index-BkuB1v93.js";import"./index-CoXSb06U.js";import"./index-s39huXS1.js";import"./index-B6hh_CYl.js";import"./index-CP5aoo4S.js";import"./index-BPI37A09.js";import"./index-BURG081a.js";import"./index-BnZREprt.js";import"./index-CsyvGLEa.js";import"./index-Bd4f5iIr.js";import"./index-OG_QCddz.js";import"./index-BDKfaAX1.js";import"./Counter-C_DywCEs.js";import"./index-CXM-PPQz.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-d0rn_W0T.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";const ge={title:"Components/Button/Button Simple",component:n},R=({testMode:d,...r})=>{const[x,g]=h.useState(0),u=j=>{r.onClick&&r.onClick(j),g(f=>f+1)},b=d?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(n,{...r,onClick:u})}),e.jsxs(k,{children:[e.jsxs(a,{children:[e.jsx(t,{children:"Icon Only"}),e.jsx(t,{children:e.jsx(n,{...i,icon:e.jsx(m,{}),label:void 0})})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Label Only"}),e.jsx(t,{children:e.jsx(n,{...i,icon:void 0,label:"Label Text"})})]}),e.jsxs(a,{children:[e.jsx(t,{children:"Label + Icon"}),e.jsx(t,{children:e.jsx(n,{...i,icon:e.jsx(m,{}),label:"Label Text"})})]})]}),e.jsxs("div",{style:{opacity:b},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:x})]})]})},o={render:R,args:{label:"Label text",disabled:!1,loading:!1,icon:"none",type:"button",appearance:"neutral",size:"s",fullWidth:!1,testMode:!1},argTypes:{...O,...S},parameters:{readme:{sidebar:[`Latest version: ${s.version}`,T,C]},packageName:s.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A3976&mode=design"}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    label: 'Label text',
    disabled: false,
    loading: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: 'none',
    type: 'button',
    appearance: 'neutral',
    size: 's',
    fullWidth: false,
    testMode: false
  },
  argTypes: {
    ...COMMON_ARG_TYPES,
    ...STORY_WITH_COUNTER_ARG_TYPES
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A3976&mode=design'
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};export{o as buttonSimple,ge as default};
