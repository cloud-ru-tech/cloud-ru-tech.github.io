import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-DQTa2Tvz.js";import{o as i,t as a}from"./src-DuVAWusq.js";import{o,s,t as c}from"./src-BgTG8_bW.js";import{n as l,t as u}from"./src-CBHTRYg6.js";import{n as d,t as f}from"./styles.module-16Kp0sbe.js";var p,m,h,g,_,v,y,b,x;e((()=>{c(),a(),u(),r(),f(),p=t(),m={title:`Uikit Product/Data display/AvatarDetail`,id:`uikit-product-avatardetail`,component:l,parameters:{layout:`padded`}},h=[o.Neutral,o.Red,o.Green,o.Blue,o.Violet],g=Object.values(s),_=Object.values(i),v=`data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="32" fill="#E0E0E0"/><circle cx="32" cy="24" r="10" fill="#9E9E9E"/><path d="M12 56c0-11.046 8.954-20 20-20s20 8.954 20 20" fill="#9E9E9E"/></svg>`)}`,y=[{label:`name only`,props:{name:`John Doe`}},{label:`name + contactData`,props:{name:`John Doe`,contactData:`jdoe@example.com`}},{label:`name + description`,props:{name:`John Doe`,description:`Some text about the user`}},{label:`all fields`,props:{name:`John Doe`,contactData:`jdoe@example.com`,description:`Some text about the user`}}],b={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:d.grid,children:[(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Content combinations`,firstColumnHeader:`Variant`,columnHeaders:[`Rendered`],rows:y.map(({label:e,props:t})=>({variantLabel:e,cells:[(0,p.jsx)(l,{...t},e)]}))}),(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Avatar appearance`,firstColumnHeader:`Appearance`,columnHeaders:[...g],rows:h.map(e=>({variantLabel:e,cells:g.map(t=>(0,p.jsx)(l,{name:`John Doe`,contactData:`jdoe@example.com`,avatar:{appearance:e,shape:t}},t))}))}),(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Avatar status indicator`,firstColumnHeader:`Status`,columnHeaders:[...g],rows:_.map(e=>({variantLabel:e,cells:g.map(t=>(0,p.jsx)(l,{name:`John Doe`,contactData:`jdoe@example.com`,avatar:{status:e,shape:t}},t))}))}),(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Avatar with image`,firstColumnHeader:`Variant`,columnHeaders:[...g],rows:[{variantLabel:`image only`,cells:g.map(e=>(0,p.jsx)(l,{name:`John Doe`,contactData:`jdoe@example.com`,avatar:{src:v,shape:e}},e))},{variantLabel:`image + status`,cells:g.map(e=>(0,p.jsx)(l,{name:`John Doe`,contactData:`jdoe@example.com`,avatar:{src:v,shape:e,status:i.Green}},e))},{variantLabel:`image + all fields`,cells:g.map(e=>(0,p.jsx)(l,{name:`John Doe`,contactData:`jdoe@example.com`,description:`Some text about the user`,avatar:{src:v,shape:e,status:i.Green}},e))}]}),(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Long content (truncation)`,firstColumnHeader:`Case`,columnHeaders:[`Rendered`],rows:[{variantLabel:`long name`,cells:[(0,p.jsx)(l,{name:`Extremely Long Username That Should Be Truncated By The Component`,contactData:`jdoe@example.com`},`long-name`)]},{variantLabel:`long contactData`,cells:[(0,p.jsx)(l,{name:`John Doe`,contactData:`very-long-email-address-that-should-be-truncated@subdomain.example.com`},`long-contact`)]},{variantLabel:`long description`,cells:[(0,p.jsx)(l,{name:`John Doe`,contactData:`jdoe@example.com`,description:`Very long description text that should be truncated by the component to a single line to test the TruncateString behavior`},`long-desc`)]}]}),(0,p.jsx)(n,{cellAlign:`start`,sectionTitle:`Avatar with showTwoSymbols (single vs multi-word name)`,firstColumnHeader:`Name`,columnHeaders:[`Rendered`],rows:[{variantLabel:`single word`,cells:[(0,p.jsx)(l,{name:`John`,contactData:`jdoe@example.com`},`single`)]},{variantLabel:`two words`,cells:[(0,p.jsx)(l,{name:`John Doe`,contactData:`jdoe@example.com`},`two`)]},{variantLabel:`three words`,cells:[(0,p.jsx)(l,{name:`John Michael Doe`,contactData:`jdoe@example.com`},`three`)]}]})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.grid}>
      <StoryTable cellAlign='start' sectionTitle='Content combinations' firstColumnHeader='Variant' columnHeaders={['Rendered']} rows={contentVariants.map(({
      label,
      props
    }) => ({
      variantLabel: label,
      cells: [<AvatarDetail key={label} {...props} />]
    }))} />

      <StoryTable cellAlign='start' sectionTitle='Avatar appearance' firstColumnHeader='Appearance' columnHeaders={[...keyShapes]} rows={keyAppearances.map(appearance => ({
      variantLabel: appearance,
      cells: keyShapes.map(shape => <AvatarDetail key={shape} name='John Doe' contactData='jdoe@example.com' avatar={{
        appearance,
        shape
      }} />)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='Avatar status indicator' firstColumnHeader='Status' columnHeaders={[...keyShapes]} rows={keyStatuses.map(status => ({
      variantLabel: status,
      cells: keyShapes.map(shape => <AvatarDetail key={shape} name='John Doe' contactData='jdoe@example.com' avatar={{
        status,
        shape
      }} />)
    }))} />

      <StoryTable cellAlign='start' sectionTitle='Avatar with image' firstColumnHeader='Variant' columnHeaders={[...keyShapes]} rows={[{
      variantLabel: 'image only',
      cells: keyShapes.map(shape => <AvatarDetail key={shape} name='John Doe' contactData='jdoe@example.com' avatar={{
        src: PLACEHOLDER_AVATAR_SRC,
        shape
      }} />)
    }, {
      variantLabel: 'image + status',
      cells: keyShapes.map(shape => <AvatarDetail key={shape} name='John Doe' contactData='jdoe@example.com' avatar={{
        src: PLACEHOLDER_AVATAR_SRC,
        shape,
        status: STATUS_APPEARANCE.Green
      }} />)
    }, {
      variantLabel: 'image + all fields',
      cells: keyShapes.map(shape => <AvatarDetail key={shape} name='John Doe' contactData='jdoe@example.com' description='Some text about the user' avatar={{
        src: PLACEHOLDER_AVATAR_SRC,
        shape,
        status: STATUS_APPEARANCE.Green
      }} />)
    }]} />

      <StoryTable cellAlign='start' sectionTitle='Long content (truncation)' firstColumnHeader='Case' columnHeaders={['Rendered']} rows={[{
      variantLabel: 'long name',
      cells: [<AvatarDetail key='long-name' name='Extremely Long Username That Should Be Truncated By The Component' contactData='jdoe@example.com' />]
    }, {
      variantLabel: 'long contactData',
      cells: [<AvatarDetail key='long-contact' name='John Doe' contactData='very-long-email-address-that-should-be-truncated@subdomain.example.com' />]
    }, {
      variantLabel: 'long description',
      cells: [<AvatarDetail key='long-desc' name='John Doe' contactData='jdoe@example.com' description='Very long description text that should be truncated by the component to a single line to test the TruncateString behavior' />]
    }]} />

      <StoryTable cellAlign='start' sectionTitle='Avatar with showTwoSymbols (single vs multi-word name)' firstColumnHeader='Name' columnHeaders={['Rendered']} rows={[{
      variantLabel: 'single word',
      cells: [<AvatarDetail key='single' name='John' contactData='jdoe@example.com' />]
    }, {
      variantLabel: 'two words',
      cells: [<AvatarDetail key='two' name='John Doe' contactData='jdoe@example.com' />]
    }, {
      variantLabel: 'three words',
      cells: [<AvatarDetail key='three' name='John Michael Doe' contactData='jdoe@example.com' />]
    }]} />
    </div>
}`,...b.parameters?.docs?.source}}},x=[`VisualMatrix`]}))();export{b as VisualMatrix,x as __namedExportsOrder,m as default};
//# sourceMappingURL=AvatarDetail.VisualMatrix.stories-B6X4ybRp.js.map