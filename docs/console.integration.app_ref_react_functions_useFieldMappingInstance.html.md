---
url: "https://console.integration.app/ref/react/functions/useFieldMappingInstance.html"
title: "useFieldMappingInstance | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useFieldMappingInstance](https://console.integration.app/ref/react/functions/useFieldMappingInstance.html)

# Function useFieldMappingInstance

- useFieldMappingInstance(

selector:undefined\|string\| [FieldMappingInstanceSelector](https://console.integration.app/ref/react/interfaces/FieldMappingInstanceSelector.html),

):{

fieldMappingInstance:undefined\| [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html);

accessor:undefined\| [FieldMappingInstanceAccessor](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html);

refresh:()=>Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >;

setup:()=>Promise<void>;

reset:()=>Promise<void>;

openConfiguration:(

options?: [OpenFieldMappingInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFieldMappingInstanceConfigurationOptions.html),

)=>Promise<undefined\|void>;

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(

data: [CreateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingInstanceRequest.html),

)=>Promise<undefined\| [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >;

patch:(data:Partial< [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html) >)=>Promise<void>;

put:(data: [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useFieldMappingInstance.html#usefieldmappinginstance)





#### Parameters



- selector: undefined\|string\| [FieldMappingInstanceSelector](https://console.integration.app/ref/react/interfaces/FieldMappingInstanceSelector.html)

#### Returns {  fieldMappingInstance:undefined\| [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html);  accessor:undefined\| [FieldMappingInstanceAccessor](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html);  refresh:()=>Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >;  setup:()=>Promise<void>;  reset:()=>Promise<void>;  openConfiguration:(  options?: [OpenFieldMappingInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFieldMappingInstanceConfigurationOptions.html),  )=>Promise<undefined\|void>;  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(  data: [CreateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingInstanceRequest.html),  )=>Promise<undefined\| [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >;  patch:(data:Partial< [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html) >)=>Promise<void>;  put:(data: [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR