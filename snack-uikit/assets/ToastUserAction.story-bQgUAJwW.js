import{j as e}from"./jsx-runtime-BTJTZTIL.js";import{c as i}from"./index-CXM-PPQz.js";import{r as j}from"./index-CJ_LmFaV.js";import{c as m,a as h,b as f,s as t}from"./styles.module-DzYDG4Qu.js";import{c as s,t as l}from"./helpers-BAkNfVWI.js";import{B as p}from"./ButtonFilled-I1cxQU3-.js";import"./index-ChsGqxH_.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-D8ciwPN-.js";import"./index-BRq5TIsn.js";import"./index-Chjiymov.js";import"./index-JZGyZbA2.js";import"./index-CAYnss5D.js";import"./ProgressBar-G0ToIzOu.js";import"./componentPropsProcessors-UJEZy8aQ.js";import"./index-DYaIcqfi.js";import"./index-DOUS9uWn.js";import"./index-Dj3Kdo0x.js";import"./TruncateString-C5pgoQdJ.js";import"./lodash-DyrGR4_s.js";import"./useIsomorphicLayoutEffect-BAXQmlEq.js";import"./isBrowser-C2N6XvuH.js";import"./Tooltip-DpTcvKfh.js";import"./PopoverPrivate-CEMvfDsk.js";import"./Link-DPAz5c_i.js";import"./index-DHfXeKe7.js";import"./LocaleProvider-7fZm_0X9.js";import"./List-CpdP8j27.js";import"./index-B7wZyJkK.js";import"./hooks-Bj8S_8l_.js";import"./useValueControl-CNLw7ht-.js";import"./Checkbox-Cm81XGOK.js";import"./constants-BObEONKm.js";import"./TogglePrivate-aVh1Iudt.js";import"./index-C0OXG0Ut.js";import"./index-CF-13Pl-.js";import"./Switch-DC6SnJsB.js";import"./Dropdown-Pk1GPJid.js";import"./index-CQc5r4_Q.js";import"./index-CV7xtGUY.js";import"./index-CAPw9s2k.js";import"./IconPredefined-DvZvK1aQ.js";import"./Typography-5rnd8anx.js";import"./ButtonTonal-mnoF1Om6.js";import"./utils-D92wmnuO.js";import"./Counter-BqPtvVBi.js";import"./Sun-DVH5ADpI.js";import"./constants-BAH7I9kc.js";import"./Divider-BbKtI3tl.js";import"./Scroll-Dm8myf0Z.js";import"./Spinner-BJeEd4V6.js";import"./ButtonFunction-BIStbrPv.js";import"./useButtonNavigation-DNBDAoGl.js";import"./useClearButton-DkMzh70e.js";import"./constants-9uwKbtvo.js";import"./InputPrivate-DOkVmsgi.js";const v={Neutral:"neutral",Success:"success",Error:"error",Warning:"warning"},Ce={title:"Components/Toaster/Toast UserAction",component:s},r=i(t.cell,t.headerCell),N=Object.values(v);function k({...x}){const{appearance:u="neutral",...a}=x;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:t.wrapper,children:[e.jsx(p,{label:"Open toast controlled","data-test-id":"toast-trigger",onClick:()=>l.userAction[u](a)}),e.jsx(p,{label:"Dismiss Toasters","data-test-id":"dismiss-toast",onClick:()=>l.userAction.dismiss()})]}),e.jsxs("div",{className:t.table,style:{gridTemplateColumns:"repeat(3, 1fr)"},children:[e.jsx("div",{className:r,style:{gridRow:"1/3"}}),e.jsx("div",{className:r,style:{gridColumn:"2/4"},children:"Appearance"}),e.jsx("div",{className:r,children:"Label Only"}),e.jsx("div",{className:r,children:"With icon"}),N.map(o=>e.jsxs(j.Fragment,{children:[e.jsx("div",{className:r,children:o}),e.jsx("div",{className:i(t.cell),children:e.jsx(s,{...a,appearance:o,"data-test-id":"",link:void 0,loading:!1})}),e.jsx("div",{className:i(t.cell),children:e.jsx(s,{...a,appearance:o,"data-test-id":"",loading:!1})})]},o)),e.jsx("div",{className:r,children:"Loading"}),e.jsx("div",{className:i(t.cell),children:e.jsx(s,{...a,"data-test-id":"",link:void 0,loading:!0})}),e.jsx("div",{className:i(t.cell),children:e.jsx(s,{...a,"data-test-id":"",loading:!0})})]})]})}const n={render:k,args:{appearance:"neutral",loading:!1,label:"Label",link:{text:"Link text",href:"#"}},parameters:{readme:{sidebar:[`Latest version: ${m.version}`,h,f]},packageName:m.name,design:{name:"Figma",type:"figma",url:"https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A197658&mode=design"}}};var c,d,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: Template,
  args: {
    appearance: 'neutral',
    loading: false,
    label: 'Label',
    link: {
      text: 'Link text',
      href: '#'
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
      url: 'https://www.figma.com/file/jtGxAPvFJOMir7V0eQFukN/Snack-UI-Kit-1.1.0?node-id=41%3A197658&mode=design'
    }
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};export{Ce as default,n as toastUserAction};
