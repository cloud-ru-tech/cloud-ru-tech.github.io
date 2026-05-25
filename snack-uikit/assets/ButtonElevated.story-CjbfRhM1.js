import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as f}from"./index-CJ_LmFaV.js";import{c as i,a as C,b as O,I as p,C as j,d as x}from"./Layout-Beon5GwF.js";import{B as m,S as E}from"./ButtonElevated-DO4RKIjz.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-C8tV8B5x.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-S9IyB2Vz.js";import"./index-osW-_rgC.js";import"./index-x7ArlFfL.js";import"./index-Df-dmYFR.js";import"./index-Cxdp8tlc.js";import"./index-CSMTAo6Q.js";import"./index-00FjgX9j.js";import"./index-BTBTknnI.js";import"./index-C3gycbXm.js";import"./index-CNC7znSK.js";import"./index-9-iRZIMV.js";import"./index-DRtCvpDZ.js";import"./index-C11pXQBT.js";import"./index-BkuB1v93.js";import"./index-CoXSb06U.js";import"./index-s39huXS1.js";import"./index-B6hh_CYl.js";import"./index-CP5aoo4S.js";import"./index-BPI37A09.js";import"./index-DW7JD-Lj.js";import"./index-BURG081a.js";import"./index-BnZREprt.js";import"./index-CsyvGLEa.js";import"./index-Bd4f5iIr.js";import"./index-OG_QCddz.js";import"./index-BDKfaAX1.js";import"./Counter-C_DywCEs.js";import"./index-CXM-PPQz.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-d0rn_W0T.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";const o={...p};delete o.none;const le={title:"Components/Button/Button Elevated",component:m},k=({testMode:c,...n})=>{const[l,d]=f.useState(0),g=b=>{n.onClick&&n.onClick(b),d(S=>S+1)},u=c?1:0;return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx(m,{...n,onClick:g})}),e.jsxs("div",{style:{opacity:u},children:[e.jsx("span",{children:"Controlled button presses: "}),e.jsx("span",{"data-test-id":"count",children:l})]})]})},t={render:k,args:{disabled:!1,loading:!1,icon:Object.entries(o)[0][0],size:"s",testMode:!1},argTypes:{...j,appearance:{table:{disable:!0}},size:{options:Object.values(E),control:{type:"radio"}},icon:{name:"[Stories]: Show icon examples",options:Object.keys(o),mapping:p,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${i.version}`,C,O]},packageName:i.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A8268&mode=design"}}};var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: false,
    loading: false,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: Object.entries(REQUIRED_ICONS)[0][0],
    size: 's',
    testMode: false
  },
  argTypes: {
    ...COMMON_ARG_TYPES,
    appearance: {
      table: {
        disable: true
      }
    },
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
    icon: {
      name: '[Stories]: Show icon examples',
      options: Object.keys(REQUIRED_ICONS),
      mapping: ICONS,
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=9%3A8268&mode=design'
    }
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};export{t as buttonElevated,le as default};
