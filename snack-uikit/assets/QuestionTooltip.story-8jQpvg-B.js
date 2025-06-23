import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{p as m}from"./README-CxSCSb7w.js";import{s,c as a,a as c,b as d}from"./styles.module-BQsjAXIb.js";import{Q as p}from"./QuestionTooltip-CwOSFYTp.js";import{L as l}from"./Link-C3MmU1Yo.js";import"./index-ChsGqxH_.js";import"./index-DUmpqB7p.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-JZGyZbA2.js";import"./index-CJ_LmFaV.js";import"./PopoverPrivate-BRtB5jhm.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./Tooltip-BF_Vu_8t.js";import"./index-B9oUDl45.js";import"./TruncateString-P8oWpQXG.js";const Q={title:"Components/Tooltip",component:p},g=({...n})=>e.jsx("div",{className:s.story,children:e.jsx(p,{...n,"data-test-id":"tooltip-test",triggerSupportProps:{"data-appearance":"blue","data-test-id":"trigger-test"},tip:n.tip||e.jsxs("div",{children:["do not press this button, please",e.jsx("br",{}),e.jsx(l,{href:"#",text:"read why",textMode:"accent",appearance:"invert-neutral"})]})})}),t={render:g,args:{size:"s",trigger:"click",placement:"top"},argTypes:{tip:{type:"string"},open:{table:{disable:!0}},onOpenChange:{table:{disable:!0}}},parameters:{readme:{sidebar:[`Latest version: ${a.version}`,c,m,d]},packageName:a.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=7%3A3108&mode=design"},a11y:{element:`.${s.story}`}}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template,
  args: {
    size: 's',
    trigger: 'click',
    placement: 'top'
  },
  argTypes: {
    tip: {
      type: 'string'
    },
    open: {
      table: {
        disable: true
      }
    },
    onOpenChange: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, popoverPrivateReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=7%3A3108&mode=design'
    },
    a11y: {
      element: \`.\${styles.story}\`
    }
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};export{Q as default,t as questionTooltip};
