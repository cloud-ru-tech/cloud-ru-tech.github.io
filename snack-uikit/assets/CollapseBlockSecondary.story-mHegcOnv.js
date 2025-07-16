import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as n}from"./index-CJ_LmFaV.js";import{t as f}from"./helpers-DbQ_Eiu6.js";import{d as r,c as s,a as C,b as k,e as p,T as P,s as j,C as y,f as E}from"./helperComponents-Ddf5yQkH.js";import{P as A}from"./index-CU6E9CWM.js";import{B as L}from"./ButtonFunction-BPKAY2B3.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-DUmpqB7p.js";import"./index-Chjiymov.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-DOM9zHVr.js";import"./index-DhD2neKD.js";import"./index-CAYnss5D.js";import"./Scroll-B3e6J9cA.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./ProgressBar-B_yquMY3.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DYaIcqfi.js";import"./index-DOUS9uWn.js";import"./index-Dj3Kdo0x.js";import"./TruncateString-BPmgFnBz.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-JZGyZbA2.js";import"./Link-B8-yxjjb.js";import"./Sun-CYpuxeak.js";import"./constants-BAH7I9kc.js";import"./hooks-C5DVcyBY.js";import"./constants-BObEONKm.js";import"./index-D3kvmOHM.js";import"./Typography-BHctNZdP.js";import"./QuestionTooltip-q_YdmJ0t.js";import"./index-BaJp5iwV.js";import"./Avatar-B5eOkVoc.js";import"./StatusIndicator-bTbjpbEI.js";import"./utils-Zzqkusky.js";import"./Counter-CRGhF3Kb.js";const ue={title:"Components/Accordion/CollapseBlockSecondary",component:r.CollapseBlock},O=({id:a,showActions:i,customHeader:g,removeContentFromDOM:S,...o})=>{const[u,m]=n.useState();n.useEffect(()=>{m(()=>{if(o.expanded)return a})},[o.expanded,a]);const x=n.useMemo(()=>{if(i)return e.jsx(L,{icon:e.jsx(A,{}),"data-test-id":P.actions,size:"xs",onClick:T=>{T.stopPropagation(),f.userAction.neutral({label:"Actions click"})}})},[i]);return e.jsx("div",{className:j.wrapper,children:e.jsx(r,{expanded:u,onExpandedChange:m,children:e.jsx(r.CollapseBlock,{id:a,actions:x,"data-test-id":o["data-test-id"],header:g?e.jsx(E,{...o}):e.jsx(r.CollapseBlockHeader,{...o}),removeContentFromDOM:S,children:e.jsx(y,{})})})})},t={render:O,args:p.args,argTypes:p.argTypes,parameters:{readme:{sidebar:[`Latest version: ${s.version}`,C,k]},packageName:s.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A262548&mode=design"}}};var c,d,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: COLLAPSE_BLOCK_STORY_SETTINGS.args,
  argTypes: COLLAPSE_BLOCK_STORY_SETTINGS.argTypes as unknown as Partial<ArgTypes<StoryProps>>,
  parameters: {
    readme: {
      sidebar: [\`Latest version: \${componentPackage.version}\`, componentReadme, componentChangelog]
    },
    packageName: componentPackage.name,
    design: {
      name: 'Figma',
      type: 'figma',
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A262548&mode=design'
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{t as collapseBlockSecondary,ue as default};
