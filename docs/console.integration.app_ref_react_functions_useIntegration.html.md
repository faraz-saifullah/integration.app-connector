---
url: "https://console.integration.app/ref/react/functions/useIntegration.html"
title: "useIntegration | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useIntegration](https://console.integration.app/ref/react/functions/useIntegration.html)

# Function useIntegration

- useIntegration(

idOrKey:undefined\|string,

):{

integration:undefined\| [Integration](https://console.integration.app/ref/react/interfaces/Integration.html);

accessor:undefined\| [IntegrationAccessor](https://console.integration.app/ref/react/classes/IntegrationAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >;

refreshing:boolean;

create:(

data: [CreateIntegrationRequest](https://console.integration.app/ref/react/interfaces/CreateIntegrationRequest.html),

)=>Promise<undefined\| [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >;

patch:(data:Partial< [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html) >)=>Promise<void>;

put:(data: [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useIntegration.html#useintegration)





#### Parameters



- idOrKey: undefined\|string

#### Returns {  integration:undefined\| [Integration](https://console.integration.app/ref/react/interfaces/Integration.html);  accessor:undefined\| [IntegrationAccessor](https://console.integration.app/ref/react/classes/IntegrationAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >;  refreshing:boolean;  create:(  data: [CreateIntegrationRequest](https://console.integration.app/ref/react/interfaces/CreateIntegrationRequest.html),  )=>Promise<undefined\| [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >;  patch:(data:Partial< [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html) >)=>Promise<void>;  put:(data: [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR