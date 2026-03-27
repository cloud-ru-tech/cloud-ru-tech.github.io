import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as A}from"./index-CJ_LmFaV.js";import{M as o,c as p,a as S,b as k,A as l,C as r,d as E,D as _,g as G}from"./utils-CBl4Xwxj.js";import{B as d}from"./ButtonFilled-Dpxz3gV3.js";import{B as L}from"./ButtonTonal-BUxrhNgO.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-BRq5TIsn.js";import"./index-Chjiymov.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-BEuzvn4S.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-BRWvDK8D.js";import"./QuestionTooltip-DWAmpZ0y.js";import"./index-JZGyZbA2.js";import"./PopoverPrivate-B3hkMTjr.js";import"./index-D8ciwPN-.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./Tooltip-Bvja_9Oj.js";import"./index-CgyQooMQ.js";import"./Scroll-Dm8myf0Z.js";import"./useModalOpenState-C9vxifaU.js";import"./index-bDUic7X-.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-DbqLuSZO.js";import"./index-CysqOHM3.js";import"./index-CeNW9I8B.js";import"./index-DJKNHUMM.js";import"./index-BRR1gMd_.js";import"./index-Dz7uS-ju.js";import"./index-Clv-rw5D.js";import"./index-CzP9MZIz.js";import"./index-BBF-mQaP.js";import"./index-BjphwxxP.js";import"./index-CDbNS7dV.js";import"./index-BVwVdvrd.js";import"./index-CR9MRPhY.js";import"./index-BcIDvl5_.js";import"./index-DzgJkNAR.js";import"./index-Dz9fnX15.js";import"./index-DO2qqcLs.js";import"./index-DAce5EUV.js";import"./index-C1BBUjNh.js";import"./index-DadV-Vij.js";import"./index-CWV_8VIe.js";import"./index-BbJ9A0eL.js";import"./index-BSWI5MkI.js";import"./index-CbwBVTm2.js";import"./utils-C37Uxzfx.js";import"./Counter-BqPtvVBi.js";import"./Sun-CsDryrZF.js";import"./constants-BAH7I9kc.js";const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,Rt={title:"Components/Modal",component:o},F=({title:s,titleTooltip:e,subtitle:n,headerAlign:f,picture:y,content:N,bodyAlign:T,disclaimer:j,footerAlign:x,showIcon:b,showImage:O,...i})=>{const[I,h]=A.useState(!0),m=()=>h(C=>!C);return t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Toggle modal",onClick:m,"data-test-id":"toggle-modal"}),t.jsxs(o,{...i,open:I,onClose:m,"data-test-id":"modal",children:[t.jsx(o.Header,{align:f,title:s,titleTooltip:e,subtitle:n,picture:G({picture:y,showImage:O,showIcon:b,icon:i.icon})}),t.jsx(o.Body,{content:N,align:T}),t.jsx(o.Footer,{align:x,disclaimer:j,actions:t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Custom button",size:"s","data-test-id":"approve-button"}),t.jsx(L,{label:"Cancel button",size:"s"})]})})]})]})},a={render:F,decorators:[s=>{const[e,n]=w();return A.useEffect(()=>{e.showImage&&n({showIcon:!1})},[n,e.showImage]),t.jsx(s,{...e})}],args:{..._,disclaimer:"Custom disclaimer text",headerAlign:"default",bodyAlign:"default",footerAlign:"default"},argTypes:{...E,disclaimer:{type:"string"},headerAlign:{defaultValue:"default",options:Object.keys(r),mapping:r,control:{type:"select"}},bodyAlign:{defaultValue:"default",options:Object.keys(r),mapping:r,control:{type:"select"}},footerAlign:{defaultValue:"default",options:Object.keys(l),mapping:l,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,S,k]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A205426&mode=design"},controls:{exclude:["align"]}}};var c,g,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  decorators: [Story => {
    const [storyArgs, setStoryArgs] = useArgs<StoryProps>();
    useEffect(() => {
      if (storyArgs.showImage) {
        setStoryArgs({
          showIcon: false
        });
      }
    }, [setStoryArgs, storyArgs.showImage]);
    return <Story {...storyArgs} />;
  }],
  args: {
    ...DEFAULT_ARGS,
    disclaimer: 'Custom disclaimer text',
    headerAlign: 'default',
    bodyAlign: 'default',
    footerAlign: 'default'
  },
  argTypes: {
    ...ARG_TYPES,
    disclaimer: {
      type: 'string'
    },
    headerAlign: {
      defaultValue: 'default',
      options: Object.keys(CONTENT_ALIGN),
      mapping: CONTENT_ALIGN,
      control: {
        type: 'select'
      }
    },
    bodyAlign: {
      defaultValue: 'default',
      options: Object.keys(CONTENT_ALIGN),
      mapping: CONTENT_ALIGN,
      control: {
        type: 'select'
      }
    },
    footerAlign: {
      defaultValue: 'default',
      options: Object.keys(ALIGN),
      mapping: ALIGN,
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A205426&mode=design'
    },
    controls: {
      exclude: ['align']
    }
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{Rt as default,a as modalCustom};
