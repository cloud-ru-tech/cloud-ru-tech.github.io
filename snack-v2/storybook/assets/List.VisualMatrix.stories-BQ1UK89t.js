import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-C3AStgPu.js";import{Ft as i,N as a,an as o,at as s,k as c,pt as l,t as u,zt as d}from"./system-DAzVmtAz.js";import{a as f,t as p}from"./src-DoErXNAZ.js";import{a as m,b as h,t as g}from"./src-B3oh4DQr.js";import{n as _,t as v}from"./stories.module-CafaY64j.js";function y(e){return(0,x.jsx)(`div`,{className:_.cell,children:(0,x.jsx)(m,{...e})})}function b(e){return(0,x.jsx)(`div`,{className:_.cellNarrow,children:(0,x.jsx)(m,{...e})})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{p(),u(),g(),r(),v(),x=t(),S={title:`Snack/Data display/List/List`,id:`components-list-list`,component:m,parameters:{layout:`padded`,controls:{disable:!0}}},C=Object.values(h),w=[{id:`a`,content:{label:`Overview`,description:`Summary`}},{id:`b`,content:{label:`Analytics`,description:`Metrics`}},{id:`c`,content:{label:`Billing`,description:`Invoices`}}],T=[{id:`a`,content:{label:`Overview`}},{id:`b`,content:{label:`Archived`},disabled:!0},{id:`c`,content:{label:`Settings`}}],E=[{id:`a`,content:{label:`Default`,description:`Description text`}},{id:`b`,content:{label:`Checked`,description:`Description text`}},{id:`c`,content:{label:`Disabled`,description:`Description text`},disabled:!0}],D=[{id:`a`,content:{label:`Default`,description:`Description text`}},{id:`b`,content:{label:`Checked`,description:`Description text`}},{id:`c`,content:{label:`Disabled`,description:`Description text`},disabled:!0}],O=[{id:`col`,type:`collapse`,content:{label:`Section`},items:[{id:`col-1`,content:{label:`Child one`}},{id:`col-2`,content:{label:`Child two`}}]}],k=[{type:`group`,label:`Workspace`,groupVariant:`subtitle`,items:[{id:`gc`,type:`collapse`,content:{label:`Nested section`},items:[{id:`gc-1`,content:{label:`Leaf item`}}]}]}],A=[{id:`r1`,content:(0,x.jsx)(`strong`,{children:`Custom raw node`})},{id:`r2`,content:(0,x.jsxs)(`span`,{children:[`Plain text + `,(0,x.jsx)(`code`,{children:`code`})]})}],j=[{id:`t1`,content:{label:`A very long option label that overflows the cell`,truncate:{label:1}}}],M=[{id:`t2`,content:{label:`Title`,description:`A very long multi-line description that clamps after two lines and shows an ellipsis`,truncate:{description:2}}}],N=[{id:`t3`,content:{label:`documents/2024/q3/report-final-version.pdf`,truncate:{label:1,variant:`middle`}}}],P={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,x.jsxs)(`div`,{className:_.matrix,children:[(0,x.jsx)(n,{sectionTitle:`Size × Selection mode`,firstColumnHeader:`Size`,columnHeaders:[`none`,`single (checked)`,`multiple (checked)`],rows:C.map(e=>({variantLabel:e.toUpperCase(),cells:[y({items:w,size:e}),y({items:w,size:e,selection:{mode:`single`,defaultValue:`b`}}),y({items:w,size:e,selection:{mode:`multiple`,defaultValue:[`a`,`c`]}})]}))}),(0,x.jsx)(n,{sectionTitle:`Selection mode × State (static)`,firstColumnHeader:`Selection`,columnHeaders:[`default`,`checked`,`disabled`],rows:[{variantLabel:`single`,cells:[y({items:[E[0]],size:`m`}),y({items:[E[1]],size:`m`,marker:!0,selection:{mode:`single`,defaultValue:`b`}}),y({items:[E[2]],size:`m`})]},{variantLabel:`multiple`,cells:[y({items:[D[0]],size:`m`,selection:{mode:`multiple`,defaultValue:[]}}),y({items:[D[1]],size:`m`,selection:{mode:`multiple`,defaultValue:[`b`]}}),y({items:[D[2]],size:`m`,selection:{mode:`multiple`,defaultValue:[]}})]}]}),(0,x.jsx)(n,{sectionTitle:`Switch presentation × Size (BaseItem switch — Figma listItem toggle)`,firstColumnHeader:`Size`,columnHeaders:[`switch off`,`switch on`,`switch + disabled`],rows:C.map(e=>({variantLabel:e.toUpperCase(),cells:[y({size:e,selection:{mode:`multiple`,defaultValue:[]},items:[{id:`notify`,switch:!0,content:{label:`Notifications`}}]}),y({size:e,selection:{mode:`multiple`,defaultValue:[`notify`]},items:[{id:`notify`,switch:!0,content:{label:`Notifications`}}]}),y({size:e,selection:{mode:`multiple`,defaultValue:[`notify`]},items:[{id:`notify`,switch:!0,disabled:!0,content:{label:`Notifications`}}]})]}))}),(0,x.jsx)(n,{sectionTitle:`Size × Slot composition (beforeContent / afterContent)`,firstColumnHeader:`Size`,columnHeaders:[`icon before`,`icon after`,`both`,`caption + both`,`button after`],rows:C.map(e=>({variantLabel:e.toUpperCase(),cells:[y({items:[{id:`a`,beforeContent:(0,x.jsx)(l,{}),content:{label:`Home`}},{id:`b`,beforeContent:(0,x.jsx)(d,{}),content:{label:`Documents`}},{id:`c`,beforeContent:(0,x.jsx)(c,{}),content:{label:`Favourites`}}],size:e}),y({items:[{id:`a`,afterContent:(0,x.jsx)(o,{}),content:{label:`Overview`}},{id:`b`,afterContent:(0,x.jsx)(o,{}),content:{label:`Analytics`}},{id:`c`,afterContent:(0,x.jsx)(o,{}),content:{label:`Billing`}}],size:e}),y({items:[{id:`a`,beforeContent:(0,x.jsx)(l,{}),afterContent:(0,x.jsx)(o,{}),content:{label:`Home`}},{id:`b`,beforeContent:(0,x.jsx)(a,{}),afterContent:(0,x.jsx)(o,{}),content:{label:`Settings`}},{id:`c`,beforeContent:(0,x.jsx)(i,{}),afterContent:(0,x.jsx)(o,{}),content:{label:`Projects`}}],size:e}),y({items:[{id:`a`,beforeContent:(0,x.jsx)(l,{}),afterContent:(0,x.jsx)(o,{}),content:{label:`Overview`,caption:`12`}},{id:`b`,beforeContent:(0,x.jsx)(d,{}),afterContent:(0,x.jsx)(o,{}),content:{label:`Analytics`,caption:`Today`}},{id:`c`,beforeContent:(0,x.jsx)(c,{}),afterContent:(0,x.jsx)(o,{}),content:{label:`Favourites`,caption:`∞`,description:`Pinned items`}}],size:e}),y({items:[`Main`,`Staging`,`Production`].map(e=>({id:e,beforeContent:(0,x.jsx)(i,{}),afterContent:(0,x.jsx)(f,{view:`function`,appearance:`neutral`,size:`s`,icon:(0,x.jsx)(s,{})}),content:{label:e}})),size:e})]}))}),(0,x.jsx)(n,{sectionTitle:`Composite item types × Size (Item union — collapse / group→collapse)`,firstColumnHeader:`Size`,columnHeaders:[`collapse (collapsed)`,`collapse (expanded)`,`group → nested collapse (expanded)`],rows:C.map(e=>({variantLabel:e.toUpperCase(),cells:[y({size:e,items:O,collapse:{defaultValue:[]}}),y({size:e,items:O,collapse:{defaultValue:[`col`]}}),y({size:e,items:k,collapse:{defaultValue:[`gc`]}})]}))}),(0,x.jsx)(n,{sectionTitle:`Separator (listItemGroup) × size`,firstColumnHeader:`Size`,columnHeaders:[`subtitle`,`subtitleTertiary`,`subtitle + divider`,`divider only`,`long label (truncate)`],rows:C.map(e=>({variantLabel:e.toUpperCase(),cells:[y({size:e,items:[{type:`group`,label:`Workspace`,beforeContent:(0,x.jsx)(i,{}),groupVariant:`subtitle`,items:[{id:`w1`,content:{label:`Overview`}},{id:`w2`,content:{label:`Analytics`}}]}]}),y({size:e,items:[{type:`group`,label:`Settings`,beforeContent:(0,x.jsx)(a,{}),groupVariant:`subtitleTertiary`,items:[{id:`s1`,content:{label:`Profile`}},{id:`s2`,content:{label:`Security`}}]}]}),y({size:e,items:[{type:`group`,label:`Workspace`,beforeContent:(0,x.jsx)(i,{}),groupVariant:`subtitle`,divider:!0,items:[{id:`wd1`,content:{label:`Overview`}},{id:`wd2`,content:{label:`Analytics`}}]}]}),y({size:e,items:[{id:`a`,content:{label:`Above divider`}},{type:`group`,divider:!0,items:[{id:`b`,content:{label:`Below divider`}}]}]}),b({size:e,items:[{type:`group`,label:`A very long group subtitle that gets truncated`,groupVariant:`subtitle`,truncate:{variant:`end`},items:[{id:`lt1`,content:{label:`Child item`}}]}]})]}))}),(0,x.jsx)(n,{sectionTitle:`Chrome — header / footer / dividers`,firstColumnHeader:`Chrome`,columnHeaders:[`header only`,`header + divider`,`footer only`,`footer + divider`,`all + dividers`],rows:[{variantLabel:`M`,cells:[y({items:w,size:`m`,header:(0,x.jsx)(`strong`,{children:`Select navigation target`})}),y({items:w,size:`m`,headerDivider:!0,header:(0,x.jsx)(`strong`,{children:`Select navigation target`})}),y({items:w,size:`m`,footer:(0,x.jsx)(f,{view:`function`,appearance:`neutral`,size:`s`,label:`Manage`})}),y({items:w,size:`m`,footerDivider:!0,footer:(0,x.jsx)(f,{view:`function`,appearance:`neutral`,size:`s`,label:`Manage`})}),y({items:w,size:`m`,headerDivider:!0,footerDivider:!0,header:(0,x.jsx)(`strong`,{children:`Choose option`}),footer:(0,x.jsx)(f,{view:`function`,appearance:`neutral`,size:`s`,label:`Apply`})})]}]}),(0,x.jsx)(n,{sectionTitle:`Pinned groups (pinTop / pinBottom) × Size`,firstColumnHeader:`Pinned`,columnHeaders:C.map(e=>e.toUpperCase()),rows:[{variantLabel:`pinTop + main`,cells:C.map(e=>y({size:e,items:w,pinTop:[{id:`pinned-top`,beforeContent:(0,x.jsx)(i,{}),content:{label:`Pinned action`,caption:`Quick access`},afterContent:(0,x.jsx)(o,{})}]}))},{variantLabel:`main + pinBottom`,cells:C.map(e=>y({size:e,items:w,pinBottom:[{id:`pinned-bottom`,beforeContent:(0,x.jsx)(i,{}),content:{label:`Pinned footer`,caption:`Sticky bottom`},afterContent:(0,x.jsx)(o,{})}]}))}]}),(0,x.jsx)(n,{sectionTitle:`Empty states — loading / no-data / no-results`,firstColumnHeader:`List`,columnHeaders:[`loading`,`no-data (empty items)`,`no-results (search)`,`error (dataError)`],rows:[{variantLabel:`list`,cells:[y({items:[],size:`m`,loading:!0}),y({items:[],size:`m`}),y({items:[],size:`m`,search:{placeholder:`Search`,value:`no-match`,onChange:()=>void 0}}),y({items:[],size:`m`,dataError:!0,errorDataState:{content:`Failed to load data`}})]}]}),(0,x.jsx)(n,{sectionTitle:`Search follows list size`,firstColumnHeader:`Size`,columnHeaders:[`List with search`],rows:C.map(e=>({variantLabel:e,cells:[y({items:w,size:e,search:{placeholder:`Search`,value:``,onChange:()=>void 0}})]}))}),(0,x.jsx)(n,{sectionTitle:`Size × Marker × Disabled / raw content`,firstColumnHeader:`Size`,columnHeaders:[`marker=true + disabled item`,`marker=false`,`raw ReactNode content`],rows:C.map(e=>({variantLabel:e.toUpperCase(),cells:[y({items:T,size:e,marker:!0,selection:{mode:`single`,defaultValue:`a`}}),y({items:T,size:e,marker:!1,selection:{mode:`single`,defaultValue:`a`}}),y({items:A,size:e})]}))}),(0,x.jsx)(n,{sectionTitle:`Truncation (ItemContent.truncate — fixed-width cell)`,firstColumnHeader:`Variant`,columnHeaders:[`option (1 line)`,`description (2 lines)`,`option (middle)`],rows:[{variantLabel:`truncate`,cells:[b({items:j,size:`m`}),b({items:M,size:`m`}),b({items:N,size:`m`})]}]})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  render: () => <div className={styles.matrix}>
      <StoryTable sectionTitle='Size × Selection mode' firstColumnHeader='Size' columnHeaders={['none', 'single (checked)', 'multiple (checked)']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [renderList({
        items: baseItems,
        size
      }), renderList({
        items: baseItems,
        size,
        selection: {
          mode: 'single',
          defaultValue: 'b'
        }
      }), renderList({
        items: baseItems,
        size,
        selection: {
          mode: 'multiple',
          defaultValue: ['a', 'c']
        }
      })]
    }))} />

      <StoryTable sectionTitle='Selection mode × State (static)' firstColumnHeader='Selection' columnHeaders={['default', 'checked', 'disabled']} rows={[{
      variantLabel: 'single',
      cells: [renderList({
        items: [singleItems[0]],
        size: 'm'
      }), renderList({
        items: [singleItems[1]],
        size: 'm',
        marker: true,
        selection: {
          mode: 'single',
          defaultValue: 'b'
        }
      }), renderList({
        items: [singleItems[2]],
        size: 'm'
      })]
    }, {
      variantLabel: 'multiple',
      cells: [renderList({
        items: [multipleItems[0]],
        size: 'm',
        selection: {
          mode: 'multiple',
          defaultValue: []
        }
      }), renderList({
        items: [multipleItems[1]],
        size: 'm',
        selection: {
          mode: 'multiple',
          defaultValue: ['b']
        }
      }), renderList({
        items: [multipleItems[2]],
        size: 'm',
        selection: {
          mode: 'multiple',
          defaultValue: []
        }
      })]
    }]} />

      <StoryTable sectionTitle='Switch presentation × Size (BaseItem switch — Figma listItem toggle)' firstColumnHeader='Size' columnHeaders={['switch off', 'switch on', 'switch + disabled']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [renderList({
        size,
        selection: {
          mode: 'multiple',
          defaultValue: []
        },
        items: [{
          id: 'notify',
          switch: true,
          content: {
            label: 'Notifications'
          }
        }]
      }), renderList({
        size,
        selection: {
          mode: 'multiple',
          defaultValue: ['notify']
        },
        items: [{
          id: 'notify',
          switch: true,
          content: {
            label: 'Notifications'
          }
        }]
      }), renderList({
        size,
        selection: {
          mode: 'multiple',
          defaultValue: ['notify']
        },
        items: [{
          id: 'notify',
          switch: true,
          disabled: true,
          content: {
            label: 'Notifications'
          }
        }]
      })]
    }))} />

      <StoryTable sectionTitle='Size × Slot composition (beforeContent / afterContent)' firstColumnHeader='Size' columnHeaders={['icon before', 'icon after', 'both', 'caption + both', 'button after']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [renderList({
        items: [{
          id: 'a',
          beforeContent: <HomeSVG />,
          content: {
            label: 'Home'
          }
        }, {
          id: 'b',
          beforeContent: <FileSVG />,
          content: {
            label: 'Documents'
          }
        }, {
          id: 'c',
          beforeContent: <StarSVG />,
          content: {
            label: 'Favourites'
          }
        }],
        size
      }), renderList({
        items: [{
          id: 'a',
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Overview'
          }
        }, {
          id: 'b',
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Analytics'
          }
        }, {
          id: 'c',
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Billing'
          }
        }],
        size
      }), renderList({
        items: [{
          id: 'a',
          beforeContent: <HomeSVG />,
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Home'
          }
        }, {
          id: 'b',
          beforeContent: <SettingsSVG />,
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Settings'
          }
        }, {
          id: 'c',
          beforeContent: <FolderSVG />,
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Projects'
          }
        }],
        size
      }), renderList({
        items: [{
          id: 'a',
          beforeContent: <HomeSVG />,
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Overview',
            caption: '12'
          }
        }, {
          id: 'b',
          beforeContent: <FileSVG />,
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Analytics',
            caption: 'Today'
          }
        }, {
          id: 'c',
          beforeContent: <StarSVG />,
          afterContent: <ChevronRightSVG />,
          content: {
            label: 'Favourites',
            caption: '∞',
            description: 'Pinned items'
          }
        }],
        size
      }), renderList({
        items: ['Main', 'Staging', 'Production'].map(label => ({
          id: label,
          beforeContent: <FolderSVG />,
          afterContent: <Button view='function' appearance='neutral' size='s' icon={<KebabSVG />} />,
          content: {
            label
          }
        })),
        size
      })]
    }))} />

      <StoryTable sectionTitle='Composite item types × Size (Item union — collapse / group→collapse)' firstColumnHeader='Size' columnHeaders={['collapse (collapsed)', 'collapse (expanded)', 'group → nested collapse (expanded)']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [renderList({
        size,
        items: collapseItems,
        collapse: {
          defaultValue: []
        }
      }), renderList({
        size,
        items: collapseItems,
        collapse: {
          defaultValue: ['col']
        }
      }), renderList({
        size,
        items: groupWithCollapse,
        collapse: {
          defaultValue: ['gc']
        }
      })]
    }))} />

      <StoryTable sectionTitle='Separator (listItemGroup) × size' firstColumnHeader='Size' columnHeaders={['subtitle', 'subtitleTertiary', 'subtitle + divider', 'divider only', 'long label (truncate)']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [renderList({
        size,
        items: [{
          type: 'group',
          label: 'Workspace',
          beforeContent: <FolderSVG />,
          groupVariant: 'subtitle',
          items: [{
            id: 'w1',
            content: {
              label: 'Overview'
            }
          }, {
            id: 'w2',
            content: {
              label: 'Analytics'
            }
          }]
        }]
      }), renderList({
        size,
        items: [{
          type: 'group',
          label: 'Settings',
          beforeContent: <SettingsSVG />,
          groupVariant: 'subtitleTertiary',
          items: [{
            id: 's1',
            content: {
              label: 'Profile'
            }
          }, {
            id: 's2',
            content: {
              label: 'Security'
            }
          }]
        }]
      }), renderList({
        size,
        items: [{
          type: 'group',
          label: 'Workspace',
          beforeContent: <FolderSVG />,
          groupVariant: 'subtitle',
          divider: true,
          items: [{
            id: 'wd1',
            content: {
              label: 'Overview'
            }
          }, {
            id: 'wd2',
            content: {
              label: 'Analytics'
            }
          }]
        }]
      }), renderList({
        size,
        items: [{
          id: 'a',
          content: {
            label: 'Above divider'
          }
        }, {
          type: 'group',
          divider: true,
          items: [{
            id: 'b',
            content: {
              label: 'Below divider'
            }
          }]
        }]
      }), renderNarrow({
        size,
        items: [{
          type: 'group',
          label: 'A very long group subtitle that gets truncated',
          groupVariant: 'subtitle',
          truncate: {
            variant: 'end'
          },
          items: [{
            id: 'lt1',
            content: {
              label: 'Child item'
            }
          }]
        }]
      })]
    }))} />

      <StoryTable sectionTitle='Chrome — header / footer / dividers' firstColumnHeader='Chrome' columnHeaders={['header only', 'header + divider', 'footer only', 'footer + divider', 'all + dividers']} rows={[{
      variantLabel: 'M',
      cells: [renderList({
        items: baseItems,
        size: 'm',
        header: <strong>Select navigation target</strong>
      }), renderList({
        items: baseItems,
        size: 'm',
        headerDivider: true,
        header: <strong>Select navigation target</strong>
      }), renderList({
        items: baseItems,
        size: 'm',
        footer: <Button view='function' appearance='neutral' size='s' label='Manage' />
      }), renderList({
        items: baseItems,
        size: 'm',
        footerDivider: true,
        footer: <Button view='function' appearance='neutral' size='s' label='Manage' />
      }), renderList({
        items: baseItems,
        size: 'm',
        headerDivider: true,
        footerDivider: true,
        header: <strong>Choose option</strong>,
        footer: <Button view='function' appearance='neutral' size='s' label='Apply' />
      })]
    }]} />

      <StoryTable sectionTitle='Pinned groups (pinTop / pinBottom) × Size' firstColumnHeader='Pinned' columnHeaders={keySizes.map(size => size.toUpperCase())} rows={[{
      variantLabel: 'pinTop + main',
      cells: keySizes.map(size => renderList({
        size,
        items: baseItems,
        pinTop: [{
          id: 'pinned-top',
          beforeContent: <FolderSVG />,
          content: {
            label: 'Pinned action',
            caption: 'Quick access'
          },
          afterContent: <ChevronRightSVG />
        }]
      }))
    }, {
      variantLabel: 'main + pinBottom',
      cells: keySizes.map(size => renderList({
        size,
        items: baseItems,
        pinBottom: [{
          id: 'pinned-bottom',
          beforeContent: <FolderSVG />,
          content: {
            label: 'Pinned footer',
            caption: 'Sticky bottom'
          },
          afterContent: <ChevronRightSVG />
        }]
      }))
    }]} />

      {/* Submenu (next-list) и Group with bulk select (group-select) вынесены в отдельные scenario-сторис
          с явной Figma-привязкой: examples/List.Submenu.stories.tsx, examples/List.BulkSelect.stories.tsx. */}

      <StoryTable sectionTitle='Empty states — loading / no-data / no-results' firstColumnHeader='List' columnHeaders={['loading', 'no-data (empty items)', 'no-results (search)', 'error (dataError)']} rows={[{
      variantLabel: 'list',
      cells: [renderList({
        items: [],
        size: 'm',
        loading: true
      }), renderList({
        items: [],
        size: 'm'
      }), renderList({
        items: [],
        size: 'm',
        search: {
          placeholder: 'Search',
          value: 'no-match',
          onChange: () => undefined
        }
      }), renderList({
        items: [],
        size: 'm',
        dataError: true,
        errorDataState: {
          content: 'Failed to load data'
        }
      })]
    }]} />

      {/* Поиск в шапке списка наследует размер айтемов: size s/m/l → SearchPrivate s/m/l
          (SearchItem берёт size из контекста List, не фиксирован 's'). */}
      <StoryTable sectionTitle='Search follows list size' firstColumnHeader='Size' columnHeaders={['List with search']} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: [renderList({
        items: baseItems,
        size,
        search: {
          placeholder: 'Search',
          value: '',
          onChange: () => undefined
        }
      })]
    }))} />

      <StoryTable sectionTitle='Size × Marker × Disabled / raw content' firstColumnHeader='Size' columnHeaders={['marker=true + disabled item', 'marker=false', 'raw ReactNode content']} rows={keySizes.map(size => ({
      variantLabel: size.toUpperCase(),
      cells: [renderList({
        items: withDisabled,
        size,
        marker: true,
        selection: {
          mode: 'single',
          defaultValue: 'a'
        }
      }), renderList({
        items: withDisabled,
        size,
        marker: false,
        selection: {
          mode: 'single',
          defaultValue: 'a'
        }
      }), renderList({
        items: rawContentItems,
        size
      })]
    }))} />

      <StoryTable sectionTitle='Truncation (ItemContent.truncate — fixed-width cell)' firstColumnHeader='Variant' columnHeaders={['option (1 line)', 'description (2 lines)', 'option (middle)']} rows={[{
      variantLabel: 'truncate',
      cells: [renderNarrow({
        items: truncateOption,
        size: 'm'
      }), renderNarrow({
        items: truncateDescription,
        size: 'm'
      }), renderNarrow({
        items: truncateMiddle,
        size: 'm'
      })]
    }]} />
    </div>
}`,...P.parameters?.docs?.source}}},F=[`VisualMatrix`]}))();export{P as VisualMatrix,F as __namedExportsOrder,S as default};
//# sourceMappingURL=List.VisualMatrix.stories-BQ1UK89t.js.map