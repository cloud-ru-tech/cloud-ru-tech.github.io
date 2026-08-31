import{i as e}from"./preload-helper-CCSz8wUY.js";import{n as t}from"./classnames-iuquYaxc.js";import{i as n,t as r}from"./iframe-CRw8NhXI.js";import{f as i,t as a}from"./src-Di-t-YsI.js";import{r as o,t as s}from"./decorators-3_t1o8X_.js";import{n as c,r as l}from"./testIds-ChG9XF4O.js";import{a as u,i as d,n as f,r as p,t as m}from"./entitiesTableFixtures-o_znHhqK.js";var h,g,_=e((()=>{h=`_matrix_90uz1_1`,g={matrix:h}})),v,y,b,x,S;e((()=>{a(),r(),s(),d(),l(),_(),v=t(),y={title:`Snack/Data display/Table/EntitiesTable`,id:`components-table-entitiestable`,component:i,parameters:{layout:`fullscreen`,controls:{disable:!0}},decorators:[o]},b={id:`entities-table-visual-matrix`,columnDefinitions:f,defaultLimit:5,searchPlaceholder:`Search entities`,getRowId:e=>e.id,queryFn:u,"data-test-id":c.serverTable.root},x={tags:[`test`,`dev`],render:()=>(0,v.jsx)(`div`,{className:g.matrix,children:(0,v.jsx)(n,{firstColumnHeader:`Состояние`,columnHeaders:[`EntitiesTable`],cellAlign:`start`,rows:[{variantLabel:`default`,cells:[(0,v.jsx)(i,{...b},`default`)]},{variantLabel:`loading`,cells:[(0,v.jsx)(i,{...b,queryFn:m({isLoading:!0,isFetching:!0})},`loading`)]},{variantLabel:`empty`,cells:[(0,v.jsx)(i,{...b,queryFn:()=>({data:{total:0,data:[]},isLoading:!1,isFetching:!1,isError:!1,isSuccess:!0,refetch:()=>{}})},`empty`)]},{variantLabel:`error`,cells:[(0,v.jsx)(i,{...b,queryFn:()=>({data:{total:0,data:[]},isLoading:!1,isFetching:!1,isError:!0,isSuccess:!1,refetch:()=>{}})},`error`)]},{variantLabel:`filters`,cells:[(0,v.jsx)(i,{...b,columnFilters:p},`filters`)]}]})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['test', 'dev'],
  render: () => <div className={styles.matrix}>
      <StoryTable firstColumnHeader='Состояние' columnHeaders={['EntitiesTable']} cellAlign='start' rows={[{
      variantLabel: 'default',
      cells: [<EntitiesTable<StoryEntity, StoryFilters> key='default' {...baseProps} />]
    }, {
      variantLabel: 'loading',
      cells: [<EntitiesTable<StoryEntity, StoryFilters> key='loading' {...baseProps} queryFn={createMockEntitiesQueryFn({
        isLoading: true,
        isFetching: true
      })} />]
    }, {
      variantLabel: 'empty',
      cells: [<EntitiesTable<StoryEntity, StoryFilters> key='empty' {...baseProps} queryFn={() => ({
        data: {
          total: 0,
          data: []
        },
        isLoading: false,
        isFetching: false,
        isError: false,
        isSuccess: true,
        refetch: () => {}
      })} />]
    }, {
      variantLabel: 'error',
      cells: [<EntitiesTable<StoryEntity, StoryFilters> key='error' {...baseProps} queryFn={() => ({
        data: {
          total: 0,
          data: []
        },
        isLoading: false,
        isFetching: false,
        isError: true,
        isSuccess: false,
        refetch: () => {}
      })} />]
    }, {
      variantLabel: 'filters',
      cells: [<EntitiesTable<StoryEntity, StoryFilters> key='filters' {...baseProps} columnFilters={entitiesColumnFilters} />]
    }]} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`VisualMatrix`]}))();export{x as VisualMatrix,S as __namedExportsOrder,y as default};
//# sourceMappingURL=EntitiesTable.VisualMatrix.stories-BO8Kcu91.js.map