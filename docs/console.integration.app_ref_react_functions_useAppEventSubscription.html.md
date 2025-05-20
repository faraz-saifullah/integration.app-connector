---
url: "https://console.integration.app/ref/react/functions/useAppEventSubscription.html"
title: "useAppEventSubscription | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useAppEventSubscription](https://console.integration.app/ref/react/functions/useAppEventSubscription.html)

# Function useAppEventSubscription

- useAppEventSubscription(

selector:undefined\|string\| [AppEventSubscriptionSelector](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionSelector.html),

):{

appEventSubscription:undefined\| [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html);

accessor:undefined\| [AppEventSubscriptionAccessor](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refresh:()=>Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) >;

refreshing:boolean;

create:(

data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html),

)=>Promise<undefined\| [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) >;

patch:(data:Partial< [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html) >)=>Promise<void>;

put:(data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useAppEventSubscription.html#useappeventsubscription)





#### Parameters



- selector: undefined\|string\| [AppEventSubscriptionSelector](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionSelector.html)

#### Returns {  appEventSubscription:undefined\| [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html);  accessor:undefined\| [AppEventSubscriptionAccessor](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refresh:()=>Promise< [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) >;  refreshing:boolean;  create:(  data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html),  )=>Promise<undefined\| [AppEventSubscription](https://console.integration.app/ref/react/interfaces/AppEventSubscription.html) >;  patch:(data:Partial< [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html) >)=>Promise<void>;  put:(data: [AppEventSubscriptionUpdateRequest](https://console.integration.app/ref/react/interfaces/AppEventSubscriptionUpdateRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR