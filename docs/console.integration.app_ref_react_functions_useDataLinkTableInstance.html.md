---
url: "https://console.integration.app/ref/react/functions/useDataLinkTableInstance.html"
title: "useDataLinkTableInstance | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useDataLinkTableInstance](https://console.integration.app/ref/react/functions/useDataLinkTableInstance.html)

# Function useDataLinkTableInstance

- useDataLinkTableInstance(

selector:undefined\|string\| [DataLinkTableInstanceSelector](https://console.integration.app/ref/react/interfaces/DataLinkTableInstanceSelector.html),

):{

dataLinkTableInstance:undefined\| [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html);

accessor:undefined\| [DataLinkTableInstanceAccessor](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html);

refresh:()=>Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) >;

findLinks:

\|undefined

\|(query?: [FindDataLinksInTableQuery](https://console.integration.app/ref/react/interfaces/FindDataLinksInTableQuery.html))=>Promise< [FindDataLinksResponse](https://console.integration.app/ref/react/interfaces/FindDataLinksResponse.html) >;

createLink:undefined\|(data: [CreateDataLinkRequest](https://console.integration.app/ref/react/interfaces/CreateDataLinkRequest.html))=>Promise<void>;

deleteLink:undefined\|(data: [DeleteDataLinkRequest](https://console.integration.app/ref/react/interfaces/DeleteDataLinkRequest.html))=>Promise<void>;

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(

data: [CreateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataLinkTableInstanceRequest.html),

)=>Promise<undefined\| [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) >;

patch:(data:Partial< [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html) >)=>Promise<void>;

put:(data: [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useDataLinkTableInstance.html#usedatalinktableinstance)





#### Parameters



- selector: undefined\|string\| [DataLinkTableInstanceSelector](https://console.integration.app/ref/react/interfaces/DataLinkTableInstanceSelector.html)

#### Returns {  dataLinkTableInstance:undefined\| [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html);  accessor:undefined\| [DataLinkTableInstanceAccessor](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html);  refresh:()=>Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) >;  findLinks:  \|undefined  \|(query?: [FindDataLinksInTableQuery](https://console.integration.app/ref/react/interfaces/FindDataLinksInTableQuery.html))=>Promise< [FindDataLinksResponse](https://console.integration.app/ref/react/interfaces/FindDataLinksResponse.html) >;  createLink:undefined\|(data: [CreateDataLinkRequest](https://console.integration.app/ref/react/interfaces/CreateDataLinkRequest.html))=>Promise<void>;  deleteLink:undefined\|(data: [DeleteDataLinkRequest](https://console.integration.app/ref/react/interfaces/DeleteDataLinkRequest.html))=>Promise<void>;  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(  data: [CreateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataLinkTableInstanceRequest.html),  )=>Promise<undefined\| [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) >;  patch:(data:Partial< [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html) >)=>Promise<void>;  put:(data: [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR