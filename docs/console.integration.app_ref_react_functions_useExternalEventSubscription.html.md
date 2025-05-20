---
url: "https://console.integration.app/ref/react/functions/useExternalEventSubscription.html"
title: "useExternalEventSubscription | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useExternalEventSubscription](https://console.integration.app/ref/react/functions/useExternalEventSubscription.html)

# Function useExternalEventSubscription

- useExternalEventSubscription(

id:undefined\|string,

):{

externalEventSubscription:undefined\| [ExternalEventSubscription](https://console.integration.app/ref/react/interfaces/ExternalEventSubscription.html);

accessor:undefined\| [ExternalEventSubscriptionAccessor](https://console.integration.app/ref/react/classes/ExternalEventSubscriptionAccessor.html);

refresh:()=>Promise< [ExternalEventSubscription](https://console.integration.app/ref/react/interfaces/ExternalEventSubscription.html) >;

setup:()=>Promise<void>;

subscribe:()=>Promise<void>;

resubscribe:()=>Promise<void>;

unsubscribe:()=>Promise<void>;

pullEvents:()=>Promise<void>;

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(data:undefined)=>Promise<undefined\| [ExternalEventSubscription](https://console.integration.app/ref/react/interfaces/ExternalEventSubscription.html) >;

patch:(data:undefined)=>Promise<void>;

put:(data:undefined)=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useExternalEventSubscription.html#useexternaleventsubscription)





#### Parameters



- id: undefined\|string

#### Returns {  externalEventSubscription:undefined\| [ExternalEventSubscription](https://console.integration.app/ref/react/interfaces/ExternalEventSubscription.html);  accessor:undefined\| [ExternalEventSubscriptionAccessor](https://console.integration.app/ref/react/classes/ExternalEventSubscriptionAccessor.html);  refresh:()=>Promise< [ExternalEventSubscription](https://console.integration.app/ref/react/interfaces/ExternalEventSubscription.html) >;  setup:()=>Promise<void>;  subscribe:()=>Promise<void>;  resubscribe:()=>Promise<void>;  unsubscribe:()=>Promise<void>;  pullEvents:()=>Promise<void>;  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(data:undefined)=>Promise<undefined\| [ExternalEventSubscription](https://console.integration.app/ref/react/interfaces/ExternalEventSubscription.html) >;  patch:(data:undefined)=>Promise<void>;  put:(data:undefined)=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR