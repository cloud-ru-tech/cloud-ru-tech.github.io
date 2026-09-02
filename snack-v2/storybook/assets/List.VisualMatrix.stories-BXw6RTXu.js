import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-BLXw10_m.js";import{Ft as i,N as a,an as o,k as s,pt as c,t as l,zt as u}from"./system-80LcuX_8.js";import{a as d,t as f}from"./src-CUvFpUpw.js";import{a as p,b as m,t as h}from"./src-PAmFBZ8U.js";import{n as g,t as _}from"./stories.module-Cv0zmHWk.js";function v(e){return(0,b.jsx)(`div`,{className:g.cell,children:(0,b.jsx)(p,{...e})})}function y(e){return(0,b.jsx)(`div`,{className:g.cellNarrow,children:(0,b.jsx)(p,{...e})})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{f(),l(),h(),r(),_(),b=t(),x={title:`Snack/Data display/List/List`,id:`components-list-list`,component:p,parameters:{layout:`padded`,controls:{disable:!0}}},S=Object.values(m),C=[{id:`a`,content:{label:`Overview`,description:`Summary`}},{id:`b`,content:{label:`Analytics`,description:`Metrics`}},{id:`c`,content:{label:`Billing`,description:`Invoices`}}],w=[{id:`a`,content:{label:`Overview`}},{id:`b`,content:{label:`Archived`},disabled:!0},{id:`c`,content:{label:`Settings`}}],T=[{id:`a`,content:{label:`Default`,description:`Description text`}},{id:`b`,content:{label:`Checked`,description:`Description text`}},{id:`c`,content:{label:`Disabled`,description:`Description text`},disabled:!0}],E=[{id:`a`,content:{label:`Default`,description:`Description text`}},{id:`b`,content:{label:`Checked`,description:`Description text`}},{id:`c`,content:{label:`Disabled`,description:`Description text`},disabled:!0}],D=[{id:`col`,type:`collapse`,content:{label:`Section`},items:[{id:`col-1`,content:{label:`Child one`}},{id:`col-2`,content:{label:`Child two`}}]}],O=[{type:`group`,label:`Workspace`,groupVariant:`subtitle`,items:[{id:`gc`,type:`collapse`,content:{label:`Nested section`},items:[{id:`gc-1`,content:{label:`Leaf item`}}]}]}],k=[{id:`r1`,content:(0,b.jsx)(`strong`,{children:`Custom raw node`})},{id:`r2`,content:(0,b.jsxs)(`span`,{children:[`Plain text + `,(0,b.jsx)(`code`,{children:`code`})]})}],A=[{id:`t1`,content:{label:`A very long option label that overflows the cell`,truncate:{label:1}}}],j=[{id:`t2`,content:{label:`Title`,description:`A very long multi-line description that clamps after two lines and shows an ellipsis`,truncate:{description:2}}}],M=[{id:`t3`,content:{label:`documents/2024/q3/report-final-version.pdf`,truncate:{label:1,variant:`middle`}}}],N={tags:[`test`,`dev`,`no-a11y`],render:()=>(0,b.jsxs)(`div`,{className:g.matrix,children:[(0,b.jsx)(n,{sectionTitle:`Size × Selection mode`,firstColumnHeader:`Size`,columnHeaders:[`none`,`single (checked)`,`multiple (checked)`],rows:S.map(e=>({variantLabel:e.toUpperCase(),cells:[v({items:C,size:e}),v({items:C,size:e,selection:{mode:`single`,defaultValue:`b`}}),v({items:C,size:e,selection:{mode:`multiple`,defaultValue:[`a`,`c`]}})]}))}),(0,b.jsx)(n,{sectionTitle:`Selection mode × State (static)`,firstColumnHeader:`Selection`,columnHeaders:[`default`,`checked`,`disabled`],rows:[{variantLabel:`single`,cells:[v({items:[T[0]],size:`m`}),v({items:[T[1]],size:`m`,marker:!0,selection:{mode:`single`,defaultValue:`b`}}),v({items:[T[2]],size:`m`})]},{variantLabel:`multiple`,cells:[v({items:[E[0]],size:`m`,selection:{mode:`multiple`,defaultValue:[]}}),v({items:[E[1]],size:`m`,selection:{mode:`multiple`,defaultValue:[`b`]}}),v({items:[E[2]],size:`m`,selection:{mode:`multiple`,defaultValue:[]}})]}]}),(0,b.jsx)(n,{sectionTitle:`Switch presentation × Size (BaseItem switch — Figma listItem toggle)`,firstColumnHeader:`Size`,columnHeaders:[`switch off`,`switch on`,`switch + disabled`],rows:S.map(e=>({variantLabel:e.toUpperCase(),cells:[v({size:e,selection:{mode:`multiple`,defaultValue:[]},items:[{id:`notify`,switch:!0,content:{label:`Notifications`}}]}),v({size:e,selection:{mode:`multiple`,defaultValue:[`notify`]},items:[{id:`notify`,switch:!0,content:{label:`Notifications`}}]}),v({size:e,selection:{mode:`multiple`,defaultValue:[`notify`]},items:[{id:`notify`,switch:!0,disabled:!0,content:{label:`Notifications`}}]})]}))}),(0,b.jsx)(n,{sectionTitle:`Size × Slot composition (beforeContent / afterContent)`,firstColumnHeader:`Size`,columnHeaders:[`icon before`,`icon after`,`both`,`caption + both`],rows:S.map(e=>({variantLabel:e.toUpperCase(),cells:[v({items:[{id:`a`,beforeContent:(0,b.jsx)(c,{}),content:{label:`Home`}},{id:`b`,beforeContent:(0,b.jsx)(u,{}),content:{label:`Documents`}},{id:`c`,beforeContent:(0,b.jsx)(s,{}),content:{label:`Favourites`}}],size:e}),v({items:[{id:`a`,afterContent:(0,b.jsx)(o,{}),content:{label:`Overview`}},{id:`b`,afterContent:(0,b.jsx)(o,{}),content:{label:`Analytics`}},{id:`c`,afterContent:(0,b.jsx)(o,{}),content:{label:`Billing`}}],size:e}),v({items:[{id:`a`,beforeContent:(0,b.jsx)(c,{}),afterContent:(0,b.jsx)(o,{}),content:{label:`Home`}},{id:`b`,beforeContent:(0,b.jsx)(a,{}),afterContent:(0,b.jsx)(o,{}),content:{label:`Settings`}},{id:`c`,beforeContent:(0,b.jsx)(i,{}),afterContent:(0,b.jsx)(o,{}),content:{label:`Projects`}}],size:e}),v({items:[{id:`a`,beforeContent:(0,b.jsx)(c,{}),afterContent:(0,b.jsx)(o,{}),content:{label:`Overview`,caption:`12`}},{id:`b`,beforeContent:(0,b.jsx)(u,{}),afterContent:(0,b.jsx)(o,{}),content:{label:`Analytics`,caption:`Today`}},{id:`c`,beforeContent:(0,b.jsx)(s,{}),afterContent:(0,b.jsx)(o,{}),content:{label:`Favourites`,caption:`∞`,description:`Pinned items`}}],size:e})]}))}),(0,b.jsx)(n,{sectionTitle:`Composite item types × Size (Item union — collapse / group→collapse)`,firstColumnHeader:`Size`,columnHeaders:[`collapse (collapsed)`,`collapse (expanded)`,`group → nested collapse (expanded)`],rows:S.map(e=>({variantLabel:e.toUpperCase(),cells:[v({size:e,items:D,collapse:{defaultValue:[]}}),v({size:e,items:D,collapse:{defaultValue:[`col`]}}),v({size:e,items:O,collapse:{defaultValue:[`gc`]}})]}))}),(0,b.jsx)(n,{sectionTitle:`Separator (listItemGroup) × size`,firstColumnHeader:`Size`,columnHeaders:[`subtitle`,`subtitleTertiary`,`subtitle + divider`,`divider only`,`long label (truncate)`],rows:S.map(e=>({variantLabel:e.toUpperCase(),cells:[v({size:e,items:[{type:`group`,label:`Workspace`,beforeContent:(0,b.jsx)(i,{}),groupVariant:`subtitle`,items:[{id:`w1`,content:{label:`Overview`}},{id:`w2`,content:{label:`Analytics`}}]}]}),v({size:e,items:[{type:`group`,label:`Settings`,beforeContent:(0,b.jsx)(a,{}),groupVariant:`subtitleTertiary`,items:[{id:`s1`,content:{label:`Profile`}},{id:`s2`,content:{label:`Security`}}]}]}),v({size:e,items:[{type:`group`,label:`Workspace`,beforeContent:(0,b.jsx)(i,{}),groupVariant:`subtitle`,divider:!0,items:[{id:`wd1`,content:{label:`Overview`}},{id:`wd2`,content:{label:`Analytics`}}]}]}),v({size:e,items:[{id:`a`,content:{label:`Above divider`}},{type:`group`,divider:!0,items:[{id:`b`,content:{label:`Below divider`}}]}]}),y({size:e,items:[{type:`group`,label:`A very long group subtitle that gets truncated`,groupVariant:`subtitle`,truncate:{variant:`end`},items:[{id:`lt1`,content:{label:`Child item`}}]}]})]}))}),(0,b.jsx)(n,{sectionTitle:`Chrome — header / footer / dividers`,firstColumnHeader:`Chrome`,columnHeaders:[`header only`,`header + divider`,`footer only`,`footer + divider`,`all + dividers`],rows:[{variantLabel:`M`,cells:[v({items:C,size:`m`,header:(0,b.jsx)(`strong`,{children:`Select navigation target`})}),v({items:C,size:`m`,headerDivider:!0,header:(0,b.jsx)(`strong`,{children:`Select navigation target`})}),v({items:C,size:`m`,footer:(0,b.jsx)(d,{view:`function`,appearance:`neutral`,size:`s`,label:`Manage`})}),v({items:C,size:`m`,footerDivider:!0,footer:(0,b.jsx)(d,{view:`function`,appearance:`neutral`,size:`s`,label:`Manage`})}),v({items:C,size:`m`,headerDivider:!0,footerDivider:!0,header:(0,b.jsx)(`strong`,{children:`Choose option`}),footer:(0,b.jsx)(d,{view:`function`,appearance:`neutral`,size:`s`,label:`Apply`})})]}]}),(0,b.jsx)(n,{sectionTitle:`Pinned groups (pinTop / pinBottom) × Size`,firstColumnHeader:`Pinned`,columnHeaders:S.map(e=>e.toUpperCase()),rows:[{variantLabel:`pinTop + main`,cells:S.map(e=>v({size:e,items:C,pinTop:[{id:`pinned-top`,beforeContent:(0,b.jsx)(i,{}),content:{label:`Pinned action`,caption:`Quick access`},afterContent:(0,b.jsx)(o,{})}]}))},{variantLabel:`main + pinBottom`,cells:S.map(e=>v({size:e,items:C,pinBottom:[{id:`pinned-bottom`,beforeContent:(0,b.jsx)(i,{}),content:{label:`Pinned footer`,caption:`Sticky bottom`},afterContent:(0,b.jsx)(o,{})}]}))}]}),(0,b.jsx)(n,{sectionTitle:`Empty states — loading / no-data / no-results`,firstColumnHeader:`List`,columnHeaders:[`loading`,`no-data (empty items)`,`no-results (search)`,`error (dataError)`],rows:[{variantLabel:`list`,cells:[v({items:[],size:`m`,loading:!0}),v({items:[],size:`m`}),v({items:[],size:`m`,search:{placeholder:`Search`,value:`no-match`,onChange:()=>void 0}}),v({items:[],size:`m`,dataError:!0,errorDataState:{content:`Failed to load data`}})]}]}),(0,b.jsx)(n,{sectionTitle:`Search follows list size`,firstColumnHeader:`Size`,columnHeaders:[`List with search`],rows:S.map(e=>({variantLabel:e,cells:[v({items:C,size:e,search:{placeholder:`Search`,value:``,onChange:()=>void 0}})]}))}),(0,b.jsx)(n,{sectionTitle:`Size × Marker × Disabled / raw content`,firstColumnHeader:`Size`,columnHeaders:[`marker=true + disabled item`,`marker=false`,`raw ReactNode content`],rows:S.map(e=>({variantLabel:e.toUpperCase(),cells:[v({items:w,size:e,marker:!0,selection:{mode:`single`,defaultValue:`a`}}),v({items:w,size:e,marker:!1,selection:{mode:`single`,defaultValue:`a`}}),v({items:k,size:e})]}))}),(0,b.jsx)(n,{sectionTitle:`Truncation (ItemContent.truncate — fixed-width cell)`,firstColumnHeader:`Variant`,columnHeaders:[`option (1 line)`,`description (2 lines)`,`option (middle)`],rows:[{variantLabel:`truncate`,cells:[y({items:A,size:`m`}),y({items:j,size:`m`}),y({items:M,size:`m`})]}]})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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

      <StoryTable sectionTitle='Size × Slot composition (beforeContent / afterContent)' firstColumnHeader='Size' columnHeaders={['icon before', 'icon after', 'both', 'caption + both']} rows={keySizes.map(size => ({
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
}`,...N.parameters?.docs?.source}}},P=[`VisualMatrix`]}))();export{N as VisualMatrix,P as __namedExportsOrder,x as default};
//# sourceMappingURL=List.VisualMatrix.stories-BXw6RTXu.js.map