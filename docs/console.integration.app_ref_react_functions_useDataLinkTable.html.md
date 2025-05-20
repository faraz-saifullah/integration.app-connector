---
url: "https://console.integration.app/ref/react/functions/useDataLinkTable.html"
title: "useDataLinkTable | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useDataLinkTable](https://console.integration.app/ref/react/functions/useDataLinkTable.html)

# Function useDataLinkTable

- useDataLinkTable(

selector:undefined\|string,

):{

dataLinkTable:undefined\| [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html);

accessor:undefined\| [DataLinkTableAccessor](https://console.integration.app/ref/react/classes/DataLinkTableAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html) >;

refreshing:boolean;

create:(

data: [CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html),

)=>Promise<undefined\| [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html) >;

patch:(data:Partial< [CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html) >)=>Promise<void>;

put:(data: [CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useDataLinkTable.html#usedatalinktable)





#### Parameters



- selector: undefined\|string

#### Returns {  dataLinkTable:undefined\| [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html);  accessor:undefined\| [DataLinkTableAccessor](https://console.integration.app/ref/react/classes/DataLinkTableAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html) >;  refreshing:boolean;  create:(  data: [CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html),  )=>Promise<undefined\| [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html) >;  patch:(data:Partial< [CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html) >)=>Promise<void>;  put:(data: [CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR