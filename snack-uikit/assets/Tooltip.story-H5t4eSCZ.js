import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as c}from"./index-CJ_LmFaV.js";import{p as g}from"./README-CRNMOd8n.js";import{s as t,c as n,a as u,b as h}from"./styles.module-BgAaEDuQ.js";import{T as p}from"./Tooltip-CwDzTnvM.js";import{B as v}from"./ButtonFilled-CQOIeFXC.js";import{L as x}from"./Link-BCihVSkA.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-CXM-PPQz.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./utils-BUH8iG2Y.js";import"./Counter-B1ZrBHB5.js";import"./Sun-BMXO82GS.js";import"./constants-BAH7I9kc.js";import"./TruncateString-C1JUVyIC.js";const J={title:"Components/Tooltip",component:p},f=({...o})=>{const[m,d]=c.useState(0);return e.jsxs("div",{className:t.storyRoot,children:[e.jsx("div",{className:t.story,children:e.jsx(p,{...o,tip:o.tip||e.jsxs("div",{children:["do not press this button, please do not press this button, please do not press this button, please do not press this button, please do not press this button, please",e.jsx("br",{}),e.jsx(x,{href:"#",text:"read why",textMode:"accent",appearance:"invert-neutral"})]}),onOpenChange:()=>d(l=>l+1),children:e.jsx(v,{label:"Reference button","data-test-id":"button-with-tooltip"})})}),e.jsxs("div",{className:t.e2eHelpers,"aria-hidden":!0,children:[e.jsx("span",{"data-test-id":"on-open-change-call-count",className:t.visuallyHidden,children:m}),e.jsx("div",{"data-test-id":"activity-removal",role:"button",tabIndex:0,className:`${t.item} ${t.activityRemovalHidden}`})]})]})},a={render:f,args:{trigger:"hover",placement:"top",disableMaxWidth:!1,"data-test-id":"tooltip"},argTypes:{tip:{type:"string"}},parameters:{readme:{sidebar:[`Latest version: ${n.version}`,u,g,h]},packageName:n.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=7%3A3034&mode=design"},a11y:{element:`.${t.story}`}}};var s,r,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: Template,
  args: {
    trigger: 'hover',
    placement: 'top',
    disableMaxWidth: false,
    'data-test-id': 'tooltip'
  },
  argTypes: {
    tip: {
      type: 'string'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=7%3A3034&mode=design'
    },
    a11y: {
      element: \`.\${styles.story}\`
    }
  }
}`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};export{J as default,a as tooltip};
