import{j as t}from"./jsx-runtime-BTJTZTIL.js";import{r as A}from"./index-CJ_LmFaV.js";import{M as o,c as p,a as S,b as k,A as l,C as r,d as E,D as _,g as G}from"./utils-BgWVhYEr.js";import{B as d}from"./ButtonFilled-CLj3NA8V.js";import{B as L}from"./ButtonTonal-ByuWQQKE.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CXM-PPQz.js";import"./index-BRq5TIsn.js";import"./index-Chjiymov.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-CAYnss5D.js";import"./IconPredefined-BFl5DzK0.js";import"./Typography-D9QXbsmR.js";import"./QuestionTooltip-CFvw4RUE.js";import"./index-JZGyZbA2.js";import"./PopoverPrivate-Wl_jan0t.js";import"./index-D8ciwPN-.js";import"./isBrowser-C2N6XvuH.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./Tooltip-C-dEnYGL.js";import"./index-BaJp5iwV.js";import"./Scroll-B_O1f2D1.js";import"./useModalOpenState-Ce-Ei8Ue.js";import"./index-DpKFoNwX.js";import"./Sprite-DoNyyhE0.js";import"./sprite.symbol-CrFdCDis.js";import"./index-DOUS9uWn.js";import"./index-CO8qBMZD.js";import"./index-xpeDvz-o.js";import"./index-CF-13Pl-.js";import"./index-DHfXeKe7.js";import"./index-B_0qYnTb.js";import"./index-CQc5r4_Q.js";import"./index-CoIthjug.js";import"./index-DmfNrAq3.js";import"./index-nGp8qeK-.js";import"./index-9wvJTAiE.js";import"./index-CNFM3LCz.js";import"./index-DnTCD4Me.js";import"./index-euh5MKXp.js";import"./index-K_J-hwcf.js";import"./index-B4f8p1mq.js";import"./index-C0OXG0Ut.js";import"./index-DYaIcqfi.js";import"./index-CU6E9CWM.js";import"./index-Cz4dqGWG.js";import"./index-CV7xtGUY.js";import"./index-BAKe6VtV.js";import"./index-CDvcICra.js";import"./index-Dj3Kdo0x.js";import"./utils-S-VjwOOO.js";import"./Counter-B1ZrBHB5.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,Rt={title:"Components/Modal",component:o},F=({title:s,titleTooltip:e,subtitle:n,headerAlign:f,picture:y,content:N,bodyAlign:T,disclaimer:j,footerAlign:x,showIcon:b,showImage:O,...i})=>{const[I,h]=A.useState(!0),m=()=>h(C=>!C);return t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Toggle modal",onClick:m,"data-test-id":"toggle-modal"}),t.jsxs(o,{...i,open:I,onClose:m,"data-test-id":"modal",children:[t.jsx(o.Header,{align:f,title:s,titleTooltip:e,subtitle:n,picture:G({picture:y,showImage:O,showIcon:b,icon:i.icon})}),t.jsx(o.Body,{content:N,align:T}),t.jsx(o.Footer,{align:x,disclaimer:j,actions:t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Custom button",size:"s","data-test-id":"approve-button"}),t.jsx(L,{label:"Cancel button",size:"s"})]})})]})]})},a={render:F,decorators:[s=>{const[e,n]=w();return A.useEffect(()=>{e.showImage&&n({showIcon:!1})},[n,e.showImage]),t.jsx(s,{...e})}],args:{..._,disclaimer:"Custom disclaimer text",headerAlign:"default",bodyAlign:"default",footerAlign:"default"},argTypes:{...E,disclaimer:{type:"string"},headerAlign:{defaultValue:"default",options:Object.keys(r),mapping:r,control:{type:"select"}},bodyAlign:{defaultValue:"default",options:Object.keys(r),mapping:r,control:{type:"select"}},footerAlign:{defaultValue:"default",options:Object.keys(l),mapping:l,control:{type:"select"}}},parameters:{readme:{sidebar:[`Latest version: ${p.version}`,S,k]},packageName:p.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A205426&mode=design"},controls:{exclude:["align"]}}};var c,g,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
