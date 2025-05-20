---
url: "https://console.integration.app/ref/react/functions/useAction.html"
title: "useAction | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useAction](https://console.integration.app/ref/react/functions/useAction.html)

# Function useAction

- useAction(

selector:undefined\|string\| [ActionSelector](https://console.integration.app/ref/react/interfaces/ActionSelector.html),

):{

action:undefined\| [Action](https://console.integration.app/ref/react/interfaces/Action.html);

apply:(integrationKeys:string\[\])=>Promise<undefined\| [Action](https://console.integration.app/ref/react/interfaces/Action.html)\[\]>;

reset:()=>Promise<void>;

refresh:()=>Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) >;

accessor:undefined\| [ActionAccessor](https://console.integration.app/ref/react/classes/ActionAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(data: [CreateActionRequest](https://console.integration.app/ref/react/types/CreateActionRequest.html))=>Promise<undefined\| [Action](https://console.integration.app/ref/react/interfaces/Action.html) >;

patch:(data:Partial< [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html) >)=>Promise<void>;

put:(data: [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useAction.html#useaction)





#### Parameters



- selector: undefined\|string\| [ActionSelector](https://console.integration.app/ref/react/interfaces/ActionSelector.html)

#### Returns {  action:undefined\| [Action](https://console.integration.app/ref/react/interfaces/Action.html);  apply:(integrationKeys:string\[\])=>Promise<undefined\| [Action](https://console.integration.app/ref/react/interfaces/Action.html)\[\]>;  reset:()=>Promise<void>;  refresh:()=>Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) >;  accessor:undefined\| [ActionAccessor](https://console.integration.app/ref/react/classes/ActionAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(data: [CreateActionRequest](https://console.integration.app/ref/react/types/CreateActionRequest.html))=>Promise<undefined\| [Action](https://console.integration.app/ref/react/interfaces/Action.html) >;  patch:(data:Partial< [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html) >)=>Promise<void>;  put:(data: [UpdateActionRequest](https://console.integration.app/ref/react/types/UpdateActionRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR