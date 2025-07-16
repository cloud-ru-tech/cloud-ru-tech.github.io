import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{r as n}from"./index-CJ_LmFaV.js";import{t as P}from"./helpers-DbQ_Eiu6.js";import{A as r,c as m,a as j,b as y,e as p,T as c,s as A,C as E,f as h}from"./helperComponents-Ddf5yQkH.js";import{P as L}from"./index-CU6E9CWM.js";import{B as O}from"./ButtonFunction-BPKAY2B3.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-Bxu_udwM.js";import"./index-DdXvKv-Q.js";import"./index-DUmpqB7p.js";import"./index-Chjiymov.js";import"./LocaleProvider-CyhbxqE1.js";import"./index-DOM9zHVr.js";import"./index-DhD2neKD.js";import"./index-CAYnss5D.js";import"./Scroll-B3e6J9cA.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./ProgressBar-B_yquMY3.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DYaIcqfi.js";import"./index-DOUS9uWn.js";import"./index-Dj3Kdo0x.js";import"./TruncateString-BPmgFnBz.js";import"./Tooltip-BNp3usZT.js";import"./PopoverPrivate-CnKgsFAm.js";import"./index-JZGyZbA2.js";import"./Link-B8-yxjjb.js";import"./Sun-CYpuxeak.js";import"./constants-BAH7I9kc.js";import"./hooks-C5DVcyBY.js";import"./constants-BObEONKm.js";import"./index-D3kvmOHM.js";import"./Typography-BHctNZdP.js";import"./QuestionTooltip-q_YdmJ0t.js";import"./index-BaJp5iwV.js";import"./Avatar-B5eOkVoc.js";import"./StatusIndicator-bTbjpbEI.js";import"./utils-Zzqkusky.js";import"./Counter-CRGhF3Kb.js";const Se={title:"Components/Accordion/CollapseBlockPrimary",component:r.CollapseBlock},B=({id:a,showActions:i,customHeader:u,shape:f,outline:x,removeContentFromDOM:S,...o})=>{const[T,s]=n.useState();n.useEffect(()=>{s(()=>{if(o.expanded)return a})},[o.expanded,a]);const C=n.useMemo(()=>{if(i)return e.jsx(O,{icon:e.jsx(L,{}),size:"xs","data-test-id":c.actions,onClick:k=>{k.stopPropagation(),P.userAction.neutral({label:"Actions click"})}})},[i]);return e.jsx("div",{className:A.wrapper,children:e.jsx(r,{expanded:T,onExpandedChange:s,"data-test-id":c.accordion,children:e.jsx(r.CollapseBlock,{id:a,actions:C,"data-test-id":o["data-test-id"],outline:x,shape:f,header:u?e.jsx(h,{...o}):e.jsx(r.CollapseBlockHeader,{...o}),removeContentFromDOM:S,children:e.jsx(E,{})})})})},t={render:B,args:{...p.args,outline:!1,shape:"round"},argTypes:p.argTypes,parameters:{readme:{sidebar:[`Latest version: ${m.version}`,j,y]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A262548&mode=design"}}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    ...COLLAPSE_BLOCK_STORY_SETTINGS.args,
    outline: false,
    shape: 'round'
  },
  argTypes: COLLAPSE_BLOCK_STORY_SETTINGS.argTypes as Partial<ArgTypes<StoryProps>>,
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
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};export{t as collapseBlockPrimary,Se as default};
