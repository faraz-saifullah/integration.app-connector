---
url: "https://console.integration.app/ref/react/functions/useConnection.html"
title: "useConnection | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useConnection](https://console.integration.app/ref/react/functions/useConnection.html)

# Function useConnection

- useConnection(

id?:string,

):{

connection:undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html);

accessor:undefined\| [ConnectionAccessor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) >;

refreshing:boolean;

create:(data: [CreateConnectionRequest](https://console.integration.app/ref/react/classes/CreateConnectionRequest.html))=>Promise<undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html) >;

patch:(data:Partial< [UpdateConnectionRequest](https://console.integration.app/ref/react/classes/UpdateConnectionRequest.html) >)=>Promise<void>;

put:(data: [UpdateConnectionRequest](https://console.integration.app/ref/react/classes/UpdateConnectionRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useConnection.html#useconnection)





#### Parameters



- `Optional` id: string

#### Returns {  connection:undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html);  accessor:undefined\| [ConnectionAccessor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) >;  refreshing:boolean;  create:(data: [CreateConnectionRequest](https://console.integration.app/ref/react/classes/CreateConnectionRequest.html))=>Promise<undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html) >;  patch:(data:Partial< [UpdateConnectionRequest](https://console.integration.app/ref/react/classes/UpdateConnectionRequest.html) >)=>Promise<void>;  put:(data: [UpdateConnectionRequest](https://console.integration.app/ref/react/classes/UpdateConnectionRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR