---
url: "https://console.integration.app/ref/react/functions/useActionInstance.html"
title: "useActionInstance | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useActionInstance](https://console.integration.app/ref/react/functions/useActionInstance.html)

# Function useActionInstance

- useActionInstance(

selector:undefined\|string\| [ActionInstanceSelector](https://console.integration.app/ref/react/interfaces/ActionInstanceSelector.html),

):{

actionInstance:undefined\| [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html);

accessor:undefined\| [ActionInstanceAccessor](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html);

refresh:()=>Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >;

setup:()=>Promise<void>;

reset:()=>Promise<void>;

openConfiguration:(

options?: [OpenActionConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenActionConfigurationOptions.html),

)=>Promise<undefined\|void>;

run:(input?:any)=>Promise<undefined\| [ActionRunResponse](https://console.integration.app/ref/react/interfaces/ActionRunResponse.html) >;

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(

data: [CreateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateActionInstanceRequest.html),

)=>Promise<undefined\| [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >;

patch:(data:Partial< [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html) >)=>Promise<void>;

put:(data: [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useActionInstance.html#useactioninstance)





#### Parameters



- selector: undefined\|string\| [ActionInstanceSelector](https://console.integration.app/ref/react/interfaces/ActionInstanceSelector.html)

#### Returns {  actionInstance:undefined\| [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html);  accessor:undefined\| [ActionInstanceAccessor](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html);  refresh:()=>Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >;  setup:()=>Promise<void>;  reset:()=>Promise<void>;  openConfiguration:(  options?: [OpenActionConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenActionConfigurationOptions.html),  )=>Promise<undefined\|void>;  run:(input?:any)=>Promise<undefined\| [ActionRunResponse](https://console.integration.app/ref/react/interfaces/ActionRunResponse.html) >;  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(  data: [CreateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateActionInstanceRequest.html),  )=>Promise<undefined\| [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >;  patch:(data:Partial< [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html) >)=>Promise<void>;  put:(data: [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR