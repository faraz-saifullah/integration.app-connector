---
url: "https://console.integration.app/ref/react/functions/useAppDataSchemaInstance.html"
title: "useAppDataSchemaInstance | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useAppDataSchemaInstance](https://console.integration.app/ref/react/functions/useAppDataSchemaInstance.html)

# Function useAppDataSchemaInstance

- useAppDataSchemaInstance(

selector:undefined\|string\| [AppDataSchemaInstanceSelector](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstanceSelector.html),

):{

appDataSchemaInstance:undefined\| [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html);

accessor:undefined\| [AppDataSchemaInstanceAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html);

refresh:()=>Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) >;

setup:()=>Promise<void>;

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(

data: [CreateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateAppDataSchemaInstanceRequest.html),

)=>Promise<undefined\| [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) >;

patch:(data:Partial< [UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html) >)=>Promise<void>;

put:(data: [UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useAppDataSchemaInstance.html#useappdataschemainstance)





#### Parameters



- selector: undefined\|string\| [AppDataSchemaInstanceSelector](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstanceSelector.html)

#### Returns {  appDataSchemaInstance:undefined\| [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html);  accessor:undefined\| [AppDataSchemaInstanceAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html);  refresh:()=>Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) >;  setup:()=>Promise<void>;  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(  data: [CreateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateAppDataSchemaInstanceRequest.html),  )=>Promise<undefined\| [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) >;  patch:(data:Partial< [UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html) >)=>Promise<void>;  put:(data: [UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR