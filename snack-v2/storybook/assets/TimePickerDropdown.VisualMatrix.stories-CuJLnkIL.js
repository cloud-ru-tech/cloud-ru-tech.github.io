import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DMWsC78w.js";import{a as i,t as a}from"./src-CayYsASu.js";import{ct as o}from"./helperComponents-R-pQH022.js";import{n as s,t as c}from"./src-DsGlD5s6.js";import{a as l,i as u,o as d}from"./testIds-CISENdCS.js";var f,p,m,h,g;e((()=>{a(),r(),c(),d(),f=t(),p={title:`Snack/Inputs & Forms/Calendar/Time Picker Dropdown`,id:`components-calendar-time-picker-dropdown`,component:s,parameters:{layout:`padded`}},m=Object.values(o),h={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,f.jsx)(n,{sectionTitle:`Size × showSeconds (триггеры, dropdown закрыт)`,firstColumnHeader:`Size`,columnHeaders:[`showSeconds=true`,`showSeconds=false`],rows:m.map(e=>({variantLabel:e,cells:[!0,!1].map(t=>(0,f.jsx)(s,{size:e,showSeconds:t,trigger:`click`,"data-test-id":u(e,t),children:(0,f.jsx)(i,{label:`${e} ${t?`sec`:`no-sec`}`,"data-test-id":l(e,t)})},`${e}-${t?`sec`:`no-sec`}`))}))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <StoryTable sectionTitle='Size × showSeconds (триггеры, dropdown закрыт)' firstColumnHeader='Size' columnHeaders={['showSeconds=true', 'showSeconds=false']} rows={sizes.map(size => ({
    variantLabel: size,
    cells: ([true, false] as const).map(showSeconds => <TimePickerDropdown key={\`\${size}-\${showSeconds ? 'sec' : 'no-sec'}\`} size={size} showSeconds={showSeconds} trigger='click' data-test-id={getTimePickerDropdownMatrixCellTestId(size, showSeconds)}>
            <Button label={\`\${size} \${showSeconds ? 'sec' : 'no-sec'}\`} data-test-id={getTimePickerDropdownMatrixTriggerTestId(size, showSeconds)} />
          </TimePickerDropdown>)
  }))} />
}`,...h.parameters?.docs?.source}}},g=[`VisualMatrix`]}))();export{h as VisualMatrix,g as __namedExportsOrder,p as default};
//# sourceMappingURL=TimePickerDropdown.VisualMatrix.stories-CuJLnkIL.js.map