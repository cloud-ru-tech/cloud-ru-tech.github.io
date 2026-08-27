import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,l as i,m as a,t as o,u as s}from"./iframe-DCnmYW19.js";import{_ as c,t as l,u}from"./src-DAG3scPa.js";import{n as d,t as f}from"./testIds-qlmU7fvP.js";var p,m,h,g,_,v;e((()=>{l(),o(),d(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Snack/Inputs & Forms/Toggles/Checkbox`,id:`components-toggles-checkbox`,component:u,parameters:{layout:`fullscreen`}},_={tags:[`dev`,`test`],args:{size:c.XS,defaultChecked:!1,indeterminateDefault:!1,loading:!1,disabled:!1,id:void 0,name:void 0,"data-test-id":f.checkbox.root},argTypes:{checked:{table:{disable:!0}},indeterminate:{table:{disable:!0}},defaultChecked:{control:`boolean`},indeterminateDefault:{control:`boolean`},size:{control:`radio`,options:Object.values(c),description:`Размер`},"data-test-id":{control:`text`,description:`Test ID для автотестов`,table:{category:`HTML Attributes`}},id:{control:`text`,description:`HTML id нативного input`,table:{category:`HTML Attributes`}},name:{control:`text`,description:`HTML name нативного input`,table:{category:`HTML Attributes`}}},render:e=>(0,p.jsx)(s,{children:(0,p.jsxs)(r,{children:[(0,p.jsx)(a,{children:`Playground`}),(0,p.jsx)(i,{children:`Чекбокс для выбора одного или нескольких значений.`}),(0,p.jsx)(n,{align:`center`,children:(0,p.jsx)(u,{...e})})]})}),play:async({canvasElement:e})=>{await m(h(e).getByTestId(f.checkbox.root)).toBeVisible()}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['dev', 'test'],
  args: {
    size: SIZE.XS,
    defaultChecked: false,
    indeterminateDefault: false,
    loading: false,
    disabled: false,
    /** Без ключей в args Storybook не применяет id/name из URL (автотесты / шаринг ссылки). */
    id: undefined,
    name: undefined,
    'data-test-id': TEST_IDS.checkbox.root
  },
  argTypes: {
    checked: {
      table: {
        disable: true
      }
    },
    indeterminate: {
      table: {
        disable: true
      }
    },
    defaultChecked: {
      control: 'boolean'
    },
    indeterminateDefault: {
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
  },
  render: args => <DemoPage>
      <DemoPanel>
        <DemoTitle>Playground</DemoTitle>
        <DemoHint>Чекбокс для выбора одного или нескольких значений.</DemoHint>
        <DemoActions align='center'>
          <Checkbox {...args} />
        </DemoActions>
      </DemoPanel>
    </DemoPage>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByTestId(TEST_IDS.checkbox.root)).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`]}))();export{_ as Playground,v as __namedExportsOrder,g as default};
//# sourceMappingURL=Checkbox.Playground.stories-bdaTOcc_.js.map