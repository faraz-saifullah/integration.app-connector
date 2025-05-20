---
url: "https://console.integration.app/ref/react/functions/useDataSourceInstance.html"
title: "useDataSourceInstance | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useDataSourceInstance](https://console.integration.app/ref/react/functions/useDataSourceInstance.html)

# Function useDataSourceInstance

- useDataSourceInstance(

selector:undefined\|string\| [DataSourceInstanceSelector](https://console.integration.app/ref/react/interfaces/DataSourceInstanceSelector.html),

):{

dataSourceInstance:undefined\| [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html);

accessor:undefined\| [DataSourceInstanceAccessor](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html);

refresh:()=>Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >;

setup:()=>Promise<void>;

reset:()=>Promise<void>;

openConfiguration:(

options?: [OpenDataSourceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenDataSourceConfigurationOptions.html),

)=>Promise<undefined\|void>;

listRecords:(

request?: [DataCollectionListRequest](https://console.integration.app/ref/react/interfaces/DataCollectionListRequest.html),

)=>Promise<undefined\| [DataCollectionListResponse](https://console.integration.app/ref/react/interfaces/DataCollectionListResponse.html) >;

findRecords:(

request?: [DataCollectionFindRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindRequest.html),

)=>Promise<undefined\| [DataCollectionFindResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindResponse.html) >;

findRecordById:(

id:string,

)=>Promise<undefined\| [DataCollectionFindByIdResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdResponse.html) >;

createRecord:(

request?: [DataCollectionCreateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionCreateRequest.html),

)=>Promise<undefined\| [DataCollectionCreateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionCreateResponse.html) >;

updateRecord:(

request?: [DataCollectionUpdateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateRequest.html),

)=>Promise<undefined\| [DataCollectionUpdateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateResponse.html) >;

deleteRecord:(

id?:string,

)=>Promise<undefined\| [DataCollectionDeleteResponse](https://console.integration.app/ref/react/interfaces/DataCollectionDeleteResponse.html) >;

unifiedFieldsToNative:(unifiedFields:any)=>Promise<any>;

getCollection:()=>Promise<undefined\| [DataCollectionSpec](https://console.integration.app/ref/react/interfaces/DataCollectionSpec.html) >;

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(

data: [CreateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataSourceInstanceRequest.html),

)=>Promise<undefined\| [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >;

patch:(data:Partial< [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html) >)=>Promise<void>;

put:(data: [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useDataSourceInstance.html#usedatasourceinstance)





#### Parameters



- selector: undefined\|string\| [DataSourceInstanceSelector](https://console.integration.app/ref/react/interfaces/DataSourceInstanceSelector.html)

#### Returns {  dataSourceInstance:undefined\| [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html);  accessor:undefined\| [DataSourceInstanceAccessor](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html);  refresh:()=>Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >;  setup:()=>Promise<void>;  reset:()=>Promise<void>;  openConfiguration:(  options?: [OpenDataSourceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenDataSourceConfigurationOptions.html),  )=>Promise<undefined\|void>;  listRecords:(  request?: [DataCollectionListRequest](https://console.integration.app/ref/react/interfaces/DataCollectionListRequest.html),  )=>Promise<undefined\| [DataCollectionListResponse](https://console.integration.app/ref/react/interfaces/DataCollectionListResponse.html) >;  findRecords:(  request?: [DataCollectionFindRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindRequest.html),  )=>Promise<undefined\| [DataCollectionFindResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindResponse.html) >;  findRecordById:(  id:string,  )=>Promise<undefined\| [DataCollectionFindByIdResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdResponse.html) >;  createRecord:(  request?: [DataCollectionCreateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionCreateRequest.html),  )=>Promise<undefined\| [DataCollectionCreateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionCreateResponse.html) >;  updateRecord:(  request?: [DataCollectionUpdateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateRequest.html),  )=>Promise<undefined\| [DataCollectionUpdateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateResponse.html) >;  deleteRecord:(  id?:string,  )=>Promise<undefined\| [DataCollectionDeleteResponse](https://console.integration.app/ref/react/interfaces/DataCollectionDeleteResponse.html) >;  unifiedFieldsToNative:(unifiedFields:any)=>Promise<any>;  getCollection:()=>Promise<undefined\| [DataCollectionSpec](https://console.integration.app/ref/react/interfaces/DataCollectionSpec.html) >;  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(  data: [CreateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataSourceInstanceRequest.html),  )=>Promise<undefined\| [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >;  patch:(data:Partial< [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html) >)=>Promise<void>;  put:(data: [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR