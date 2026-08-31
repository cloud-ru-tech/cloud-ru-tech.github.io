import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CRw8NhXI.js";import{a as i,t as a}from"./src-BlBPNAvZ.js";import{ct as o,ot as s}from"./helperComponents-BMCMHRzD.js";import{o as c,t as l}from"./src-Pb_EyFL_.js";import{n as u,o as d,r as f}from"./testIds-CRW9HOwl.js";var p,m,h,g,_,v;e((()=>{a(),r(),l(),d(),p=t(),m={title:`Snack/Inputs & Forms/Calendar/Calendar Dropdown`,id:`components-calendar-calendar-dropdown`,component:c,parameters:{layout:`padded`}},h=Object.values(o),g=[s.Date,s.DateTime,s.DateRange],_={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(n,{sectionTitle:`Size × Mode (триггеры, dropdown закрыт)`,firstColumnHeader:`Size`,columnHeaders:g.map(e=>e),rows:h.map(e=>({variantLabel:e,cells:g.map(t=>(0,p.jsx)(c,{mode:t,size:e,trigger:`click`,"data-test-id":u(e,t),children:(0,p.jsx)(i,{label:`${e}/${t}`,"data-test-id":f(e,t)})},`${e}-${t}`))}))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='Size × Mode (триггеры, dropdown закрыт)' firstColumnHeader='Size' columnHeaders={modes.map(m => m)} rows={sizes.map(size => ({
    variantLabel: size,
    cells: modes.map(mode => <CalendarDropdown key={\`\${size}-\${mode}\`} mode={mode} size={size} trigger='click' data-test-id={getCalendarDropdownMatrixCellTestId(size, mode)}>
            <Button label={\`\${size}/\${mode}\`} data-test-id={getCalendarDropdownMatrixTriggerTestId(size, mode)} />
          </CalendarDropdown>)
  }))} />
}`,..._.parameters?.docs?.source}}},v=[`VisualMatrix`]}))();export{_ as VisualMatrix,v as __namedExportsOrder,m as default};
//# sourceMappingURL=CalendarDropdown.VisualMatrix.stories-Bm9-FE7f.js.map