import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,d as r,t as i,u as a}from"./iframe-B2mzxEaG.js";import{Ft as o,U as s,t as c}from"./system-CrCJ8saZ.js";import{O as l,m as u,t as d}from"./src-CKwYZnPI.js";function f({children:e}){return(0,p.jsx)(a,{children:(0,p.jsx)(r,{width:`narrow`,children:(0,p.jsx)(n,{align:`start`,children:e})})})}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{d(),c(),i(),p=t(),m=[{id:`s`,content:{label:`Small (1 vCPU, 2 GB)`}},{id:`m`,content:{label:`Medium (2 vCPU, 4 GB)`}},{id:`l`,content:{label:`Large (4 vCPU, 8 GB)`}}],h=[{type:`group`,label:`Standard`,items:[{id:`s`,content:{label:`Small`}},{id:`m`,content:{label:`Medium`}}]},{type:`group`,label:`High-memory`,divider:!0,items:[{id:`r-m`,content:{label:`Memory M`}},{id:`r-l`,content:{label:`Memory L`}}]}],g=[{type:`group-select`,id:`standard`,label:`Standard`,selectButtonLabel:`Select all`,items:[{id:`s`,content:{label:`Small`}},{id:`m`,content:{label:`Medium`}}]},{type:`group-select`,id:`high-memory`,label:`High-memory`,selectButtonLabel:`Select all`,items:[{id:`r-m`,content:{label:`Memory M`}},{id:`r-l`,content:{label:`Memory L`}}]}],_=[{id:`s`,content:{label:`Small`}},{type:`next-list`,id:`regions`,beforeContent:(0,p.jsx)(s,{}),content:{label:`Regions`},items:[{id:`ru`,content:{label:`ru-central1`}},{id:`kz`,content:{label:`kz-central1`}}]}],v=[{id:`s`,content:{label:`Small`}},{type:`collapse`,id:`advanced`,beforeContent:(0,p.jsx)(o,{}),content:{label:`Advanced sizes`},items:[{id:`xl`,content:{label:`X-Large`}},{id:`xxl`,content:{label:`XX-Large`}}]}],y={title:`Snack/Inputs & Forms/Fields/FieldSelect/Tests/Open`,id:`components-fields-fieldselect-tests-open`,component:u,parameters:{layout:`fullscreen`,controls:{disable:!0}}},b={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Instance size`,items:m,selection:`single`,defaultValue:`m`,open:!0})})},x={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Instance sizes`,items:m,selection:`multiple`,chips:!0,defaultValue:[`m`],open:!0})})},S={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Instance size`,items:h,selection:`single`,open:!0})})},C={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Instance sizes`,items:g,selection:`multiple`,chips:!1,open:!0})})},w={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Location`,items:_,selection:`single`,open:!0})})},T={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Instance size`,items:v,selection:`single`,open:!0})})},E={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Region`,items:m,pinTop:[{id:`recommended`,content:{label:`Recommended`,caption:`ru-central1-a`}}],pinBottom:[{id:`all`,content:{label:`Show all regions`}}],selection:`single`,open:!0})})},D={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Instance size`,items:[],selection:`single`,loading:!0,open:!0})})},O={tags:[`test`,`dev`],render:()=>(0,p.jsx)(f,{children:(0,p.jsx)(u,{"data-test-id":l.fieldSelect,label:`Instance size`,items:[],selection:`single`,noDataState:{content:`No sizes available`},open:!0})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Instance size' items={options} selection='single' defaultValue='m' open />
    </OpenHost>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Instance sizes' items={options} selection='multiple' chips defaultValue={['m']} open />
    </OpenHost>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Instance size' items={groupedItems} selection='single' open />
    </OpenHost>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Instance sizes' items={groupSelectItems} selection='multiple' chips={false} open />
    </OpenHost>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Location' items={nestedItems} selection='single' open />
    </OpenHost>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Instance size' items={accordionItems} selection='single' open />
    </OpenHost>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Region' items={options} pinTop={[{
      id: 'recommended',
      content: {
        label: 'Recommended',
        caption: 'ru-central1-a'
      }
    }]} pinBottom={[{
      id: 'all',
      content: {
        label: 'Show all regions'
      }
    }]} selection='single' open />
    </OpenHost>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Instance size' items={[]} selection='single' loading open />
    </OpenHost>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <OpenHost>
      <FieldSelect data-test-id={TEST_IDS.fieldSelect} label='Instance size' items={[]} selection='single' noDataState={{
      content: 'No sizes available'
    }} open />
    </OpenHost>
}`,...O.parameters?.docs?.source}}},k=[`Open`,`OpenMultiple`,`OpenGrouped`,`OpenGroupSelect`,`OpenNested`,`OpenAccordion`,`OpenPinned`,`OpenLoading`,`OpenEmpty`]}))();export{b as Open,T as OpenAccordion,O as OpenEmpty,C as OpenGroupSelect,S as OpenGrouped,D as OpenLoading,x as OpenMultiple,w as OpenNested,E as OpenPinned,k as __namedExportsOrder,y as default};
//# sourceMappingURL=FieldSelect.Open.stories-MtUF0dG0.js.map