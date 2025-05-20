---
url: "https://console.integration.app/ref/react/functions/useAppEventType.html"
title: "useAppEventType | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useAppEventType](https://console.integration.app/ref/react/functions/useAppEventType.html)

# Function useAppEventType

- useAppEventType(

selector:undefined\|string,

):{

appEventType:undefined\| [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html);

accessor:undefined\| [AppEventTypeAccessor](https://console.integration.app/ref/react/classes/AppEventTypeAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html) >;

refreshing:boolean;

create:(

data: [CreateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/CreateAppEventTypeRequest.html),

)=>Promise<undefined\| [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html) >;

patch:(data:Partial< [UpdateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/UpdateAppEventTypeRequest.html) >)=>Promise<void>;

put:(data: [UpdateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/UpdateAppEventTypeRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useAppEventType.html#useappeventtype)





#### Parameters



- selector: undefined\|string

#### Returns {  appEventType:undefined\| [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html);  accessor:undefined\| [AppEventTypeAccessor](https://console.integration.app/ref/react/classes/AppEventTypeAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html) >;  refreshing:boolean;  create:(  data: [CreateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/CreateAppEventTypeRequest.html),  )=>Promise<undefined\| [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html) >;  patch:(data:Partial< [UpdateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/UpdateAppEventTypeRequest.html) >)=>Promise<void>;  put:(data: [UpdateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/UpdateAppEventTypeRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR