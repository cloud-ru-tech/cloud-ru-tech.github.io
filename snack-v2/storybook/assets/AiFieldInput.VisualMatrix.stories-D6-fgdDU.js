import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{c as n,i as r,ot as i,t as a,wn as o}from"./iframe-CH0ThVYh.js";import{D as s,E as c,O as l,S as u,a as d,b as f,c as p,f as m,g as h,i as g,m as _,n as v,o as y,r as b,s as x,t as S,u as C,v as w,w as T}from"./fixtures-DWZx4NC0.js";var E,D,O,k=e((()=>{E=`_cell_iolgr_4`,D=`_grid_iolgr_9`,O={cell:E,grid:D}})),A,j,M,N,P,F,I,L;e((()=>{i(),x(),a(),d(),k(),A=t(),{fn:j}=__STORYBOOK_MODULE_TEST__,M=j(),N={title:`AI/Surfaces/AiFieldInput`,id:`ai-aifieldinput`,component:u,parameters:{layout:`padded`}},P=[o.Desktop,o.Mobile],F=[{label:`green`,value:15},{label:`orange`,value:80},{label:`red`,value:95}],I={tags:[`test`,`dev`,`no-a11y`],parameters:{controls:{disable:!0}},render:function(){let e=y(),t=[{label:`placeholder`,value:[]},{label:`text`,value:e.valueText,props:{attachments:(0,A.jsx)(S,{})}},{label:`text + skill`,value:e.valueTextAndSkill},{label:`skill`,value:e.valueSkill},{label:`disabled`,value:[],props:{disabled:!0,placeholder:e.disabledPlaceholder}}],i=[...e.skills,{id:`back`,label:e.back,type:c.Back}],a=Array.from({length:14},(t,n)=>({id:`row-${n}`,label:e.command(n+1)}));return(0,A.jsxs)(`div`,{className:O.grid,children:[(0,A.jsx)(r,{sectionTitle:`Content × Layout`,firstColumnHeader:`Content`,columnHeaders:P.map(e=>e.toUpperCase()),rows:t.map(({label:t,value:r,props:i})=>({variantLabel:t,cells:P.map(t=>(0,A.jsx)(n,{layoutType:t,children:(0,A.jsx)(`div`,{className:O.cell,children:(0,A.jsx)(u,{placeholder:e.placeholder,defaultValue:r,banner:(0,A.jsx)(v,{onClose:M}),footerLeftActions:(0,A.jsx)(b,{}),footerRightActions:(0,A.jsx)(g,{}),scrollButton:{indicator:!0},...i})})},t))}))}),(0,A.jsx)(r,{sectionTitle:`Action List: Padding × Content`,firstColumnHeader:`Padding`,columnHeaders:[`ROW TYPES`,`OVERFLOW (SCROLL)`],rows:[!1,!0].map(e=>({variantLabel:e?`padding`:`no padding`,cells:[(0,A.jsx)(`div`,{className:O.cell,children:(0,A.jsx)(f,{padding:e,items:i})},`types`),(0,A.jsx)(`div`,{className:O.cell,children:(0,A.jsx)(f,{padding:e,items:a})},`overflow`)]}))}),(0,A.jsx)(r,{sectionTitle:`Footer buttons × Disabled`,firstColumnHeader:`Button`,columnHeaders:[`DEFAULT`,`DISABLED`],rows:[{label:`plus`,render:e=>(0,A.jsx)(m,{disabled:e})},{label:`settings`,render:e=>(0,A.jsx)(C,{disabled:e})},{label:`voice`,render:e=>(0,A.jsx)(p,{disabled:e})},{label:`model`,render:t=>(0,A.jsx)(_,{label:e.modelName,disabled:t})},{label:`model (truncate)`,render:t=>(0,A.jsx)(_,{label:e.modelNameLong,disabled:t})},{label:`effort`,render:t=>(0,A.jsx)(h,{label:e.effortLevel,disabled:t})}].map(({label:e,render:t})=>({variantLabel:e,cells:[!1,!0].map(e=>(0,A.jsx)(`span`,{children:t(e)},String(e)))}))}),(0,A.jsx)(r,{sectionTitle:`Context × Progress`,firstColumnHeader:`Progress`,columnHeaders:[`AUTO`,`FORCED RED`],rows:F.map(({label:e,value:t})=>({variantLabel:`${e} (${t}%)`,cells:[(0,A.jsx)(w,{value:t},`auto`),(0,A.jsx)(w,{value:t,progress:s.Red},`forced`)]}))}),(0,A.jsx)(r,{sectionTitle:`Send × State`,firstColumnHeader:`State`,columnHeaders:[`SEND`],rows:Object.values(l).map(e=>({variantLabel:e,cells:[(0,A.jsx)(T,{state:e},e)]}))})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev', 'no-a11y'],
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const texts = useStoryTexts();
    const fieldRows: Array<{
      label: string;
      value: AiFieldInputValue;
      props?: Partial<AiFieldInputProps>;
    }> = [{
      label: 'placeholder',
      value: []
    }, {
      label: 'text',
      value: texts.valueText,
      props: {
        attachments: <Attachments />
      }
    }, {
      label: 'text + skill',
      value: texts.valueTextAndSkill
    }, {
      label: 'skill',
      value: texts.valueSkill
    }, {
      label: 'disabled',
      value: [],
      props: {
        disabled: true,
        placeholder: texts.disabledPlaceholder
      }
    }];
    const actionListRows = [...texts.skills, {
      id: 'back',
      label: texts.back,
      type: ACTION_LIST_ITEM_TYPE.Back
    }];
    const actionListOverflow = Array.from({
      length: 14
    }, (_, index) => ({
      id: \`row-\${index}\`,
      label: texts.command(index + 1)
    }));
    const footerButtons: Array<{
      label: string;
      render(disabled: boolean): ReactNode;
    }> = [{
      label: 'plus',
      render: disabled => <AiFieldInputPlusButton disabled={disabled} />
    }, {
      label: 'settings',
      render: disabled => <AiFieldInputSettingsButton disabled={disabled} />
    }, {
      label: 'voice',
      render: disabled => <AiFieldInputVoiceButton disabled={disabled} />
    }, {
      label: 'model',
      render: disabled => <AiFieldInputModelButton label={texts.modelName} disabled={disabled} />
    }, {
      label: 'model (truncate)',
      render: disabled => <AiFieldInputModelButton label={texts.modelNameLong} disabled={disabled} />
    }, {
      label: 'effort',
      render: disabled => <AiFieldInputEffortButton label={texts.effortLevel} disabled={disabled} />
    }];
    return <div className={styles.grid}>
        <StoryTable sectionTitle='Content × Layout' firstColumnHeader='Content' columnHeaders={layouts.map(layout => layout.toUpperCase())} rows={fieldRows.map(({
        label,
        value,
        props
      }) => ({
        variantLabel: label,
        cells: layouts.map(layout => <LayoutScope key={layout} layoutType={layout}>
                <div className={styles.cell}>
                  <AiFieldInput placeholder={texts.placeholder} defaultValue={value} banner={<DemoBanner onClose={handleBannerClose} />} footerLeftActions={<FooterLeftActions />} footerRightActions={<FooterRightActions />} scrollButton={{
              indicator: true
            }} {...props} />
                </div>
              </LayoutScope>)
      }))} />
        <StoryTable sectionTitle='Action List: Padding × Content' firstColumnHeader='Padding' columnHeaders={['ROW TYPES', 'OVERFLOW (SCROLL)']} rows={[false, true].map(padding => ({
        variantLabel: padding ? 'padding' : 'no padding',
        cells: [<div key='types' className={styles.cell}>
                <AiFieldInputActionList padding={padding} items={actionListRows} />
              </div>, <div key='overflow' className={styles.cell}>
                <AiFieldInputActionList padding={padding} items={actionListOverflow} />
              </div>]
      }))} />
        <StoryTable sectionTitle='Footer buttons × Disabled' firstColumnHeader='Button' columnHeaders={['DEFAULT', 'DISABLED']} rows={footerButtons.map(({
        label,
        render
      }) => ({
        variantLabel: label,
        cells: [false, true].map(disabled => <span key={String(disabled)}>{render(disabled)}</span>)
      }))} />
        <StoryTable sectionTitle='Context × Progress' firstColumnHeader='Progress' columnHeaders={['AUTO', 'FORCED RED']} rows={contextRows.map(({
        label,
        value
      }) => ({
        variantLabel: \`\${label} (\${value}%)\`,
        cells: [<AiFieldInputContextButton key='auto' value={value} />, <AiFieldInputContextButton key='forced' value={value} progress={CONTEXT_PROGRESS.Red} />]
      }))} />
        <StoryTable sectionTitle='Send × State' firstColumnHeader='State' columnHeaders={['SEND']} rows={Object.values(SEND_STATE).map(state => ({
        variantLabel: state,
        cells: [<AiFieldInputSendButton key={state} state={state} />]
      }))} />
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L=[`VisualMatrix`]}))();export{I as VisualMatrix,L as __namedExportsOrder,N as default};
//# sourceMappingURL=AiFieldInput.VisualMatrix.stories-D6-fgdDU.js.map