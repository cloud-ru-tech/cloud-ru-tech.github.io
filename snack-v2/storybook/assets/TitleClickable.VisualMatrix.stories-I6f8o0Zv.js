import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-szaSCk8V.js";import{U as i,t as a}from"./system-leSQpqQe.js";import{n as o,t as s}from"./src-BKZTRQBn.js";import{n as c,t as l}from"./testIds-Gme_5rA2.js";var u,d,f,p=e((()=>{u=`_matrix_10daa_4`,d=`_fullWidthCell_10daa_9`,f={matrix:u,fullWidthCell:d}})),m,h,g,_;e((()=>{a(),s(),r(),p(),c(),m=t(),h={title:`Uikit Product/Actions/TitleClickable`,id:`uikit-product-titleclickable`,component:o,parameters:{layout:`padded`}},g={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,m.jsxs)(`div`,{className:f.matrix,children:[(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`Standalone content`,firstColumnHeader:`component`,columnHeaders:[`rendered`],rows:[{variantLabel:`SimpleTitle`,cells:[(0,m.jsx)(o.SimpleTitle,{title:`Standalone title`,className:`custom-simple`,"data-test-id":l.standaloneSimple,"aria-label":`Simple title`},`simple`)]},{variantLabel:`UserTitle`,cells:[(0,m.jsx)(o.UserTitle,{name:`Standalone user`,subtitle:`Administrator`,className:`custom-user`,"data-test-id":l.standaloneUser,"aria-label":`User title`,showTwoSymbols:!0},`user`)]}]}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`Width × Icon`,firstColumnHeader:`width`,columnHeaders:[`no icon`,`with icon`],rows:[`auto`,`full`].map(e=>({variantLabel:e,cells:[void 0,(0,m.jsx)(i,{},`icon`)].map((t,n)=>(0,m.jsx)(`div`,{className:e===`full`?f.fullWidthCell:void 0,children:(0,m.jsx)(o,{href:`#`,content:(0,m.jsx)(o.SimpleTitle,{title:`Title`,icon:t}),fullWidth:e===`full`})},n))}))}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`showArrow × long title (truncation)`,firstColumnHeader:`showArrow`,columnHeaders:[`short`,`long`],rows:[!0,!1].map(e=>({variantLabel:String(e),cells:[`Title`,`Very long title that should definitely truncate on a single line`].map((t,n)=>(0,m.jsx)(`div`,{className:f.fullWidthCell,children:(0,m.jsx)(o,{href:`#`,content:(0,m.jsx)(o.SimpleTitle,{title:t,icon:(0,m.jsx)(i,{})}),fullWidth:!0,showArrow:e})},n))}))}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`Arrow icon (auto: chevron / external by target)`,firstColumnHeader:`target`,columnHeaders:[`no icon`,`with icon`],rows:[`_self`,`_blank`].map(e=>({variantLabel:e,cells:[void 0,(0,m.jsx)(i,{},`icon`)].map((t,n)=>(0,m.jsx)(o,{href:`#`,target:e,content:(0,m.jsx)(o.SimpleTitle,{title:`Title`,icon:t})},n))}))}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`SimpleTitle and custom content`,firstColumnHeader:`variant`,columnHeaders:[`rendered`],rows:[{variantLabel:`icon before title`,cells:[(0,m.jsx)(o,{href:`#`,content:(0,m.jsx)(o.SimpleTitle,{title:`With icon`,icon:(0,m.jsx)(i,{})})},`icon`)]},{variantLabel:`custom children`,cells:[(0,m.jsx)(o,{href:`#`,content:(0,m.jsx)(`span`,{"data-test-id":l.customChildren,children:`Custom children`})},`custom`)]}]}),(0,m.jsx)(n,{cellAlign:`start`,sectionTitle:`UserTitle`,firstColumnHeader:`variant`,columnHeaders:[`rendered`],rows:[{variantLabel:`without subtitle`,cells:[(0,m.jsx)(o,{href:`#`,content:(0,m.jsx)(o.UserTitle,{name:`John Doe`})},`name`)]},{variantLabel:`long user title`,cells:[(0,m.jsx)(`div`,{className:f.fullWidthCell,children:(0,m.jsx)(o,{href:`#`,fullWidth:!0,content:(0,m.jsx)(o.UserTitle,{name:`Very long user name that must truncate`,subtitle:`very.long.email.address@example.com`})})},`long-user`)]},{variantLabel:`avatar + name + subtitle`,cells:[(0,m.jsx)(`div`,{className:f.fullWidthCell,children:(0,m.jsx)(o,{href:`#`,fullWidth:!0,content:(0,m.jsx)(o.UserTitle,{name:`John Doe`,subtitle:`jdoe@example.com`})})},`avatar`)]}]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      <StoryTable cellAlign='start' sectionTitle='Standalone content' firstColumnHeader='component' columnHeaders={['rendered']} rows={[{
      variantLabel: 'SimpleTitle',
      cells: [<TitleClickable.SimpleTitle key='simple' title='Standalone title' className='custom-simple' data-test-id={STORY_TEST_IDS.standaloneSimple} aria-label='Simple title' />]
    }, {
      variantLabel: 'UserTitle',
      cells: [<TitleClickable.UserTitle key='user' name='Standalone user' subtitle='Administrator' className='custom-user' data-test-id={STORY_TEST_IDS.standaloneUser} aria-label='User title' showTwoSymbols />]
    }]} />
      <StoryTable cellAlign='start' sectionTitle='Width × Icon' firstColumnHeader='width' columnHeaders={['no icon', 'with icon']} rows={(['auto', 'full'] as const).map(width => ({
      variantLabel: width,
      cells: [undefined, <PlaceholderSVG key='icon' />].map((icon, idx) => <div key={idx} className={width === 'full' ? styles.fullWidthCell : undefined}>
              <TitleClickable href='#' content={<TitleClickable.SimpleTitle title='Title' icon={icon} />} fullWidth={width === 'full'} />
            </div>)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='showArrow × long title (truncation)' firstColumnHeader='showArrow' columnHeaders={['short', 'long']} rows={[true, false].map(showArrow => ({
      variantLabel: String(showArrow),
      cells: ['Title', 'Very long title that should definitely truncate on a single line'].map((title, idx) => <div key={idx} className={styles.fullWidthCell}>
              <TitleClickable href='#' content={<TitleClickable.SimpleTitle title={title} icon={<PlaceholderSVG />} />} fullWidth showArrow={showArrow} />
            </div>)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='Arrow icon (auto: chevron / external by target)' firstColumnHeader='target' columnHeaders={['no icon', 'with icon']} rows={(['_self', '_blank'] as const).map(target => ({
      variantLabel: target,
      cells: [undefined, <PlaceholderSVG key='icon' />].map((icon, idx) => <TitleClickable key={idx} href='#' target={target} content={<TitleClickable.SimpleTitle title='Title' icon={icon} />} />)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='SimpleTitle and custom content' firstColumnHeader='variant' columnHeaders={['rendered']} rows={[{
      variantLabel: 'icon before title',
      cells: [<TitleClickable key='icon' href='#' content={<TitleClickable.SimpleTitle title='With icon' icon={<PlaceholderSVG />} />} />]
    }, {
      variantLabel: 'custom children',
      cells: [<TitleClickable key='custom' href='#' content={<span data-test-id={STORY_TEST_IDS.customChildren}>Custom children</span>} />]
    }]} />

      <StoryTable cellAlign='start' sectionTitle='UserTitle' firstColumnHeader='variant' columnHeaders={['rendered']} rows={[{
      variantLabel: 'without subtitle',
      cells: [<TitleClickable key='name' href='#' content={<TitleClickable.UserTitle name='John Doe' />} />]
    }, {
      variantLabel: 'long user title',
      cells: [<div key='long-user' className={styles.fullWidthCell}>
                <TitleClickable href='#' fullWidth content={<TitleClickable.UserTitle name='Very long user name that must truncate' subtitle='very.long.email.address@example.com' />} />
              </div>]
    }, {
      variantLabel: 'avatar + name + subtitle',
      cells: [<div key='avatar' className={styles.fullWidthCell}>
                <TitleClickable href='#' fullWidth content={<TitleClickable.UserTitle name='John Doe' subtitle='jdoe@example.com' />} />
              </div>]
    }]} />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`VisualMatrix`]}))();export{g as VisualMatrix,_ as __namedExportsOrder,h as default};
//# sourceMappingURL=TitleClickable.VisualMatrix.stories-I6f8o0Zv.js.map