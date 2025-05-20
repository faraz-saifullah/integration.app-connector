---
url: "https://console.integration.app/ref/react/functions/useFieldMapping.html"
title: "useFieldMapping | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useFieldMapping](https://console.integration.app/ref/react/functions/useFieldMapping.html)

# Function useFieldMapping

- useFieldMapping(

selector:undefined\|string\| [FieldMappingSelector](https://console.integration.app/ref/react/interfaces/FieldMappingSelector.html),

):{

fieldMapping:undefined\| [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html);

apply:(integrationKeys:string\[\])=>Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html)\[\]>;

reset:()=>Promise<void>;

setup:()=>Promise<void>;

refresh:()=>Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >;

accessor:undefined\| [FieldMappingAccessor](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(

data: [CreateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingRequest.html),

)=>Promise<undefined\| [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >;

patch:(data:Partial< [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html) >)=>Promise<void>;

put:(data: [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useFieldMapping.html#usefieldmapping)





#### Parameters



- selector: undefined\|string\| [FieldMappingSelector](https://console.integration.app/ref/react/interfaces/FieldMappingSelector.html)

#### Returns {  fieldMapping:undefined\| [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html);  apply:(integrationKeys:string\[\])=>Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html)\[\]>;  reset:()=>Promise<void>;  setup:()=>Promise<void>;  refresh:()=>Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >;  accessor:undefined\| [FieldMappingAccessor](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(  data: [CreateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingRequest.html),  )=>Promise<undefined\| [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >;  patch:(data:Partial< [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html) >)=>Promise<void>;  put:(data: [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR