---
url: "https://console.integration.app/ref/react/functions/useAppDataSchema.html"
title: "useAppDataSchema | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useAppDataSchema](https://console.integration.app/ref/react/functions/useAppDataSchema.html)

# Function useAppDataSchema

- useAppDataSchema(

selector:undefined\|string,

):{

appDataSchema:undefined\| [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html);

accessor:undefined\| [AppDataSchemaAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html) >;

refreshing:boolean;

create:(

data: [CreateAppDataSchemaRequest](https://console.integration.app/ref/react/types/CreateAppDataSchemaRequest.html),

)=>Promise<undefined\| [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html) >;

patch:(data:Partial< [UpdateAppDataSchemaRequest](https://console.integration.app/ref/react/types/UpdateAppDataSchemaRequest.html) >)=>Promise<void>;

put:(data: [UpdateAppDataSchemaRequest](https://console.integration.app/ref/react/types/UpdateAppDataSchemaRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useAppDataSchema.html#useappdataschema)





#### Parameters



- selector: undefined\|string

#### Returns {  appDataSchema:undefined\| [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html);  accessor:undefined\| [AppDataSchemaAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html) >;  refreshing:boolean;  create:(  data: [CreateAppDataSchemaRequest](https://console.integration.app/ref/react/types/CreateAppDataSchemaRequest.html),  )=>Promise<undefined\| [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html) >;  patch:(data:Partial< [UpdateAppDataSchemaRequest](https://console.integration.app/ref/react/types/UpdateAppDataSchemaRequest.html) >)=>Promise<void>;  put:(data: [UpdateAppDataSchemaRequest](https://console.integration.app/ref/react/types/UpdateAppDataSchemaRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR