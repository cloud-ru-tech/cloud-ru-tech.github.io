import{j as d}from"./jsx-runtime-BTJTZTIL.js";import{r as s}from"./index-CJ_LmFaV.js";import{c as g,a as M,b as j,s as x}from"./styles.module-CLMOox1i.js";import{A as E,S as u}from"./constants-BaREPXw5.js";import{T as w}from"./TagRow-C88g9nC1.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./Tag-BQnjA3Yk.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DHAmGKAZ.js";import"./Tooltip-1OIhPckQ.js";import"./PopoverPrivate-BdsLPfxY.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-JZGyZbA2.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./Dropdown-C2a42CkE.js";import"./Scroll-Dm8myf0Z.js";const f=Object.values(E),k=({amountToGenerate:a,char:l,charLimit:r,includeTooltip:p})=>{let e=0,t=1;const o=[];for(;o.length<a;){const n=o.length+1,m=`tag${n}`.padEnd(t+`tag${n}`.length,l);o.push({label:m,appearance:f[e],tooltip:p?{tip:`Tooltip for ${m}. You can set custom props.`}:void 0}),e++,t++,e>f.length&&(e=0),t>r&&(t=1)}return o},q={title:"Components/Tag/Tag Row",component:w},P=({items:a,removableMode:l,demoTagsAmount:r,fullWidthMode:p,showTooltips:e,...t})=>{const o=s.useMemo(()=>({amountToGenerate:r,char:"x",charLimit:5,includeTooltip:e}),[r,e]),n=s.useMemo(()=>Array.isArray(a)?a:k(o),[o,a]),[m,c]=s.useState(n),v=A=>c(S=>S.filter(({label:T})=>T!==A));return s.useEffect(()=>{c(n)},[n]),d.jsx("div",{className:x.tagRowWrapper,"data-full-width":p,children:d.jsx(w,{...t,items:m,onItemRemove:l?v:void 0})})},i={render:P,args:{removableMode:!1,demoTagsAmount:50,size:u.Xs,moreButtonLabel:"More: ",rowLimit:2,fullWidthMode:!1},argTypes:{size:{options:Object.values(u),control:{type:"radio"}},removableMode:{name:"[Story]: Show remove mode",control:{type:"boolean"}},demoTagsAmount:{name:"[Story]: Amount of demo tags",control:{type:"number"}},items:{control:{type:"object"}},fullWidthMode:{name:"[Story]: Full width mode",control:{type:"boolean"}},showTooltips:{name:"[Stories] show tooltips",type:"boolean"}},parameters:{readme:{sidebar:[`Latest version: ${g.version}`,M,j]},packageName:g.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A24551&mode=design"}}};var h,y,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    removableMode: false,
    demoTagsAmount: 50,
    size: SIZE.Xs,
    moreButtonLabel: 'More: ',
    rowLimit: 2,
    fullWidthMode: false
  },
  argTypes: {
    size: {
      options: Object.values(SIZE),
      control: {
        type: 'radio'
      }
    },
    removableMode: {
      name: '[Story]: Show remove mode',
      control: {
        type: 'boolean'
      }
    },
    demoTagsAmount: {
      name: '[Story]: Amount of demo tags',
      control: {
        type: 'number'
      }
    },
    items: {
      control: {
        type: 'object'
      }
    },
    fullWidthMode: {
      name: '[Story]: Full width mode',
      control: {
        type: 'boolean'
      }
    },
    showTooltips: {
      name: '[Stories] show tooltips',
      type: 'boolean'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A24551&mode=design'
    }
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};export{q as default,i as tagRow};
