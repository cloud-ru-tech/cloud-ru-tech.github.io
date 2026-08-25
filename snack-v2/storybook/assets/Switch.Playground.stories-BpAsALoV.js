import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-BUDedHtH.js";import{_ as c,c as l,t as u}from"./src-BLAjKv8o.js";import{n as d,t as f}from"./testIds-qlmU7fvP.js";var p,m,h,g,_,v,y,b;e((()=>{u(),o(),d(),p=t(),{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{expect:h,within:g}=__STORYBOOK_MODULE_TEST__,_={title:`Snack/Inputs & Forms/Toggles/Switch`,id:`components-toggles-switch`,component:l,parameters:{layout:`fullscreen`}},v=e=>{let[{checked:t},o]=m();return(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`Переключатель состояния включено/выключено.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(l,{...e,checked:t,onChange:e=>o({checked:e})})})]})})},y={tags:[`dev`,`test`],render:v,play:async({canvasElement:e})=>{await h(g(e).getByTestId(f.switch.root)).toBeVisible()},args:{size:c.XS,checked:void 0,defaultChecked:void 0,loading:!1,disabled:!1,showIcon:!1,id:void 0,name:void 0,"data-test-id":f.switch.root},argTypes:{checked:{control:`boolean`},defaultChecked:{control:`boolean`},size:{control:`radio`,options:Object.values(c),description:`Размер`},"data-test-id":{control:`text`,description:`Test ID для автотестов`,table:{category:`HTML Attributes`}},id:{control:`text`,description:`HTML id нативного input`,table:{category:`HTML Attributes`}},name:{control:`text`,description:`HTML name нативного input`,table:{category:`HTML Attributes`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  render: Template,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.switch.root)).toBeVisible();
  },
  args: {
    size: SIZE.XS,
    checked: undefined,
    defaultChecked: undefined,
    loading: false,
    disabled: false,
    showIcon: false,
    /** Без ключей в args Storybook не применяет id/name из URL (автотесты / шаринг ссылки). */
    id: undefined,
    name: undefined,
    'data-test-id': TEST_IDS.switch.root
  },
  argTypes: {
    checked: {
      control: 'boolean'
    },
    defaultChecked: {
      control: 'boolean'
    },
    size: {
      control: 'radio',
      options: Object.values(SIZE),
      description: 'Размер'
    },
    'data-test-id': {
      control: 'text',
      description: 'Test ID для автотестов',
      table: {
        category: 'HTML Attributes'
      }
    },
    id: {
      control: 'text',
      description: 'HTML id нативного input',
      table: {
        category: 'HTML Attributes'
      }
    },
    name: {
      control: 'text',
      description: 'HTML name нативного input',
      table: {
        category: 'HTML Attributes'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Playground`]}))();export{y as Playground,b as __namedExportsOrder,_ as default};
//# sourceMappingURL=Switch.Playground.stories-BpAsALoV.js.map