import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C2bZDhP2.js";import{a as i,t as a}from"./src-C1QhDRIw.js";import{a as o,b as s,n as c,t as l}from"./src-D8F-gOdf.js";import{n as u,t as d}from"./stories.module-Cv0zmHWk.js";function f(e){return(0,m.jsx)(c,{...e,children:(0,m.jsx)(i,{label:`Open (${String(e.size??`s`).toUpperCase()})`,size:`m`})})}function p(e){return(0,m.jsx)(`div`,{className:u.cell,children:(0,m.jsx)(o,{...e})})}var m,h,g,_,v,y;e((()=>{a(),l(),r(),d(),m=t(),h={title:`Snack/Data display/List/Droplist`,id:`components-list-droplist`,component:c,parameters:{layout:`padded`,controls:{disable:!0}}},g=[{id:`a`,content:{label:`Overview`}},{id:`b`,content:{label:`Analytics`}},{id:`c`,content:{label:`Billing`}}],_=Object.values(s),v={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,m.jsxs)(`div`,{className:u.matrix,children:[(0,m.jsx)(n,{sectionTitle:`Trigger × Size (closed)`,firstColumnHeader:`Size`,columnHeaders:[`trigger`],rows:_.map(e=>({variantLabel:e.toUpperCase(),cells:[f({items:g,size:e})]}))}),(0,m.jsx)(n,{sectionTitle:`Droplist surface — item types (rendered as List, size m)`,firstColumnHeader:`Surface`,columnHeaders:[`single (checked)`,`multiple + switch`,`group → collapse`],rows:[{variantLabel:`M`,cells:[p({items:g,size:`m`,marker:!0,selection:{mode:`single`,defaultValue:`b`}}),p({size:`m`,selection:{mode:`multiple`,defaultValue:[`a`]},items:[{id:`a`,content:{label:`Overview`}},{id:`notify`,switch:!0,content:{label:`Notifications`}}]}),p({size:`m`,collapse:{defaultValue:[`nested`]},items:[{type:`group`,label:`Workspace`,groupVariant:`subtitle`,items:[{id:`nested`,type:`collapse`,content:{label:`Resources`},items:[{id:`leaf`,content:{label:`Servers`}}]}]}]})]}]})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  // no-a11y: статичная матрица без интерактивного фокуса; a11y проверяется на Playground/InteractionTest.
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={matrixStyles.matrix}>
      <StoryTable sectionTitle='Trigger × Size (closed)' firstColumnHeader='Size' columnHeaders={['trigger']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [renderTrigger({
        items,
        size
      })]
    }))} />

      <StoryTable sectionTitle='Droplist surface — item types (rendered as List, size m)' firstColumnHeader='Surface' columnHeaders={['single (checked)', 'multiple + switch', 'group → collapse']} rows={[{
      variantLabel: 'M',
      cells: [renderSurface({
        items,
        size: 'm',
        marker: true,
        selection: {
          mode: 'single',
          defaultValue: 'b'
        }
      }), renderSurface({
        size: 'm',
        selection: {
          mode: 'multiple',
          defaultValue: ['a']
        },
        items: [{
          id: 'a',
          content: {
            label: 'Overview'
          }
        }, {
          id: 'notify',
          switch: true,
          content: {
            label: 'Notifications'
          }
        }]
      }), renderSurface({
        size: 'm',
        collapse: {
          defaultValue: ['nested']
        },
        items: [{
          type: 'group',
          label: 'Workspace',
          groupVariant: 'subtitle',
          items: [{
            id: 'nested',
            type: 'collapse',
            content: {
              label: 'Resources'
            },
            items: [{
              id: 'leaf',
              content: {
                label: 'Servers'
              }
            }]
          }]
        }]
      })]
    }]} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`VisualMatrix`]}))();export{v as VisualMatrix,y as __namedExportsOrder,h as default};
//# sourceMappingURL=Droplist.VisualMatrix.stories-B_Kh-7fP.js.map