---
url: "https://console.integration.app/ref/react/functions/useDataSource.html"
title: "useDataSource | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useDataSource](https://console.integration.app/ref/react/functions/useDataSource.html)

# Function useDataSource

- useDataSource(

selector:undefined\|string\| [DataSourceSelector](https://console.integration.app/ref/react/interfaces/DataSourceSelector.html),

):{

dataSource:undefined\| [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html);

apply:(integrationKeys:string\[\])=>Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html)\[\]>;

reset:()=>Promise<void>;

refresh:()=>Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >;

setup:()=>Promise<void>;

accessor:undefined\| [DataSourceAccessor](https://console.integration.app/ref/react/classes/DataSourceAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(data: [CreateDataSourceRequest](https://console.integration.app/ref/react/types/CreateDataSourceRequest.html))=>Promise<undefined\| [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >;

patch:(data:Partial< [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html) >)=>Promise<void>;

put:(data: [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useDataSource.html#usedatasource)





#### Parameters



- selector: undefined\|string\| [DataSourceSelector](https://console.integration.app/ref/react/interfaces/DataSourceSelector.html)

#### Returns {  dataSource:undefined\| [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html);  apply:(integrationKeys:string\[\])=>Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html)\[\]>;  reset:()=>Promise<void>;  refresh:()=>Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >;  setup:()=>Promise<void>;  accessor:undefined\| [DataSourceAccessor](https://console.integration.app/ref/react/classes/DataSourceAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(data: [CreateDataSourceRequest](https://console.integration.app/ref/react/types/CreateDataSourceRequest.html))=>Promise<undefined\| [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >;  patch:(data:Partial< [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html) >)=>Promise<void>;  put:(data: [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR