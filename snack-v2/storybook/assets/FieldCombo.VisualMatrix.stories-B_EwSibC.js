import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CqCwb0Nr.js";import{F as i,U as a,dn as o,hn as s,t as c}from"./system-BW4r_z9r.js";import{c as l,l as u}from"./src-BfpHRgYW.js";import{S as d,t as f}from"./src-DIomiWOX.js";var p,m,h,g=e((()=>{p=`_matrix_1n9yp_4`,m=`_narrow_1n9yp_9`,h={matrix:p,narrow:m}})),_,v,y,b,x,S;e((()=>{f(),c(),r(),g(),_=t(),v={title:`Snack/Inputs & Forms/Fields/FieldCombo`,id:`components-fields-fieldcombo`,component:d,parameters:{layout:`fullscreen`}},y=[l.S,l.M,l.L],b=[u.Default,u.Error,u.Warning,u.Success],x={tags:[`test`,`dev`],parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:h.matrix,children:[(0,_.jsx)(n,{sectionTitle:`Size × ValidationState`,firstColumnHeader:`Size`,columnHeaders:b.map(e=>e.toUpperCase()),rows:y.map(e=>({variantLabel:e,cells:b.map(t=>(0,_.jsx)(d,{size:e,validationState:t,label:`Label`,hint:t===u.Default?`Hint`:`${t} hint`,showHintIcon:!0,defaultValue:`Value`},t))}))}),(0,_.jsx)(n,{sectionTitle:`Slot composition (size=m, default)`,firstColumnHeader:`Composition`,columnHeaders:[`Render`],rows:[{variantLabel:`icon before`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,placeholder:`Search`,iconBefore:(0,_.jsx)(i,{})},`ib`)]},{variantLabel:`icon after`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`user@example.com`,iconAfter:(0,_.jsx)(s,{})},`ia`)]},{variantLabel:`prefix + postfix`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`100`,prefix:`$`,postfix:`USD`},`pp`)]},{variantLabel:`icon + prefix + postfix`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`100`,iconBefore:(0,_.jsx)(i,{}),prefix:`$`,postfix:`USD`},`ipp`)]},{variantLabel:`prefixIcon (alias → iconBefore)`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,placeholder:`prefixIcon`,prefixIcon:(0,_.jsx)(i,{})},`pi`)]},{variantLabel:`no background`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`Borderless`,background:!1},`nb`)]},{variantLabel:`with length counter`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`12 chars in`,length:{current:11,max:100}},`lc`)]},{variantLabel:`limit exceeded (current > max)`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`Over the configured limit`,length:{current:105,max:100}},`le`)]},{variantLabel:`error overrides validationState=success`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Success,defaultValue:`value@bad`,error:`Введите корректное значение`,showHintIcon:!0},`eo`)]}]}),(0,_.jsx)(n,{sectionTitle:`Element slots (size=m)`,firstColumnHeader:`Slot`,columnHeaders:[`Render`],rows:[{variantLabel:`elementBefore (action)`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,placeholder:`Pick`,elementBefore:{action:(0,_.jsx)(a,{})}},`eb`)]},{variantLabel:`elementAfter (chevron-only)`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`100`,elementAfter:{action:(0,_.jsx)(a,{}),withDropdownList:!0}},`ea`)]},{variantLabel:`elementAfter (loading)`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`Async lookup…`,elementAfter:{action:(0,_.jsx)(o,{}),loading:!0}},`el`)]},{variantLabel:`readonly + elementAfter (slot disabled)`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`Readonly value`,readonly:!0,elementAfter:{action:(0,_.jsx)(a,{}),withDropdownList:!0}},`re`)]},{variantLabel:`all slots (Figma master)`,cells:[(0,_.jsx)(d,{size:l.M,validationState:u.Default,defaultValue:`Input value`,iconBefore:(0,_.jsx)(i,{}),iconAfter:(0,_.jsx)(s,{}),prefix:`Prefix`,postfix:`Postfix`,elementBefore:{action:(0,_.jsx)(a,{}),withDropdownList:!0},elementAfter:{action:(0,_.jsx)(a,{}),withDropdownList:!0}},`all`)]}]}),(0,_.jsx)(n,{sectionTitle:`State (size=m, default validation)`,firstColumnHeader:`State`,columnHeaders:[`Render`],rows:[{variantLabel:`default (empty)`,cells:[(0,_.jsx)(d,{size:l.M,label:`Label`,defaultValue:``},`d`)]},{variantLabel:`placeholder`,cells:[(0,_.jsx)(d,{size:l.M,label:`Label`,defaultValue:``,placeholder:`Placeholder`},`p`)]},{variantLabel:`filled (+ clear)`,cells:[(0,_.jsx)(d,{size:l.M,label:`Label`,defaultValue:`Sample value`,showClearButton:!0},`f`)]},{variantLabel:`disabled + value`,cells:[(0,_.jsx)(d,{size:l.M,label:`Label`,defaultValue:`Sample value`,disabled:!0},`ds`)]},{variantLabel:`readonly + value (+ copy)`,cells:[(0,_.jsx)(d,{size:l.M,label:`Label`,defaultValue:`readonly value`,readonly:!0,showCopyButton:!0},`ro`)]}]})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className={styles.matrix}>
      {/* Поле тонирует acrylic-фон по валидации (error→red, warning→yellow, success→green;
          default — нейтральный фон). Это field-специфика, а не chrome FieldDecorator. */}
      <StoryTable sectionTitle='Size × ValidationState' firstColumnHeader='Size' columnHeaders={keyStates.map(s => s.toUpperCase())} rows={keySizes.map(size => ({
      variantLabel: size,
      cells: keyStates.map(state => <FieldCombo key={state} size={size} validationState={state} label='Label' hint={state === VALIDATION_STATE.Default ? 'Hint' : \`\${state} hint\`} showHintIcon defaultValue='Value' />)
    }))} />

      <StoryTable sectionTitle='Slot composition (size=m, default)' firstColumnHeader='Composition' columnHeaders={['Render']} rows={[{
      variantLabel: 'icon before',
      cells: [<FieldCombo key='ib' size={SIZE.M} validationState={VALIDATION_STATE.Default} placeholder='Search' iconBefore={<SearchSVG />} />]
    }, {
      variantLabel: 'icon after',
      cells: [<FieldCombo key='ia' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='user@example.com' iconAfter={<CalendarSVG />} />]
    }, {
      variantLabel: 'prefix + postfix',
      cells: [<FieldCombo key='pp' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='100' prefix='$' postfix='USD' />]
    }, {
      variantLabel: 'icon + prefix + postfix',
      cells: [<FieldCombo key='ipp' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='100' iconBefore={<SearchSVG />} prefix='$' postfix='USD' />]
    }, {
      variantLabel: 'prefixIcon (alias → iconBefore)',
      cells: [<FieldCombo key='pi' size={SIZE.M} validationState={VALIDATION_STATE.Default} placeholder='prefixIcon' prefixIcon={<SearchSVG />} />]
    }, {
      variantLabel: 'no background',
      cells: [<FieldCombo key='nb' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='Borderless' background={false} />]
    }, {
      variantLabel: 'with length counter',
      cells: [<FieldCombo key='lc' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='12 chars in' length={{
        current: 11,
        max: 100
      }} />]
    }, {
      variantLabel: 'limit exceeded (current > max)',
      cells: [<FieldCombo key='le' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='Over the configured limit' length={{
        current: 105,
        max: 100
      }} />]
    }, {
      // error форсит красную тонировку поверх validationState=success.
      variantLabel: 'error overrides validationState=success',
      cells: [<FieldCombo key='eo' size={SIZE.M} validationState={VALIDATION_STATE.Success} defaultValue='value@bad' error='Введите корректное значение' showHintIcon />]
    }]} />

      <StoryTable sectionTitle='Element slots (size=m)' firstColumnHeader='Slot' columnHeaders={['Render']} rows={[{
      variantLabel: 'elementBefore (action)',
      cells: [<FieldCombo key='eb' size={SIZE.M} validationState={VALIDATION_STATE.Default} placeholder='Pick' elementBefore={{
        action: <PlaceholderSVG />
      }} />]
    }, {
      variantLabel: 'elementAfter (chevron-only)',
      cells: [<FieldCombo key='ea' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='100' elementAfter={{
        action: <PlaceholderSVG />,
        withDropdownList: true
      }} />]
    }, {
      variantLabel: 'elementAfter (loading)',
      cells: [<FieldCombo key='el' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='Async lookup…' elementAfter={{
        action: <ChevronDownSVG />,
        loading: true
      }} />]
    }, {
      // readonly форсит disabled на слот-кнопке (renderElement: disabled || readOnly).
      variantLabel: 'readonly + elementAfter (slot disabled)',
      cells: [<FieldCombo key='re' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='Readonly value' readonly elementAfter={{
        action: <PlaceholderSVG />,
        withDropdownList: true
      }} />]
    }, {
      // Полная композиция всех слотов — набор и порядок по Figma-мастеру:
      // elementBefore (buttonField: action + chevron
      // через withDropdownList) | iconBefore | prefix | value + clear | postfix | iconAfter |
      // elementAfter (action + chevron). Тексты prefix/postfix/value — иллюстративные.
      variantLabel: 'all slots (Figma master)',
      cells: [<FieldCombo key='all' size={SIZE.M} validationState={VALIDATION_STATE.Default} defaultValue='Input value' iconBefore={<SearchSVG />} iconAfter={<CalendarSVG />} prefix='Prefix' postfix='Postfix' elementBefore={{
        action: <PlaceholderSVG />,
        withDropdownList: true
      }} elementAfter={{
        action: <PlaceholderSVG />,
        withDropdownList: true
      }} />]
    }]} />

      <StoryTable sectionTitle='State (size=m, default validation)' firstColumnHeader='State' columnHeaders={['Render']} rows={[{
      variantLabel: 'default (empty)',
      cells: [<FieldCombo key='d' size={SIZE.M} label='Label' defaultValue='' />]
    }, {
      variantLabel: 'placeholder',
      cells: [<FieldCombo key='p' size={SIZE.M} label='Label' defaultValue='' placeholder='Placeholder' />]
    }, {
      variantLabel: 'filled (+ clear)',
      cells: [<FieldCombo key='f' size={SIZE.M} label='Label' defaultValue='Sample value' showClearButton />]
    }, {
      variantLabel: 'disabled + value',
      cells: [<FieldCombo key='ds' size={SIZE.M} label='Label' defaultValue='Sample value' disabled />]
    }, {
      variantLabel: 'readonly + value (+ copy)',
      cells: [<FieldCombo key='ro' size={SIZE.M} label='Label' defaultValue='readonly value' readonly showCopyButton />]
    }]} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,v as default};
//# sourceMappingURL=FieldCombo.VisualMatrix.stories-B_EwSibC.js.map