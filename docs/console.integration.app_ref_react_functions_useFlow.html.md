---
url: "https://console.integration.app/ref/react/functions/useFlow.html"
title: "useFlow | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useFlow](https://console.integration.app/ref/react/functions/useFlow.html)

# Function useFlow

- useFlow(

selector:undefined\|string\| [FlowSelector](https://console.integration.app/ref/react/interfaces/FlowSelector.html),

):{

flow:undefined\| [Flow](https://console.integration.app/ref/react/interfaces/Flow.html);

apply:(integrationKeys:string\[\])=>Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html)\[\]>;

reset:()=>Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >;

refresh:()=>Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >;

accessor:undefined\| [FlowAccessor](https://console.integration.app/ref/react/classes/FlowAccessor.html);

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(data: [CreateFlowRequest](https://console.integration.app/ref/react/interfaces/CreateFlowRequest.html))=>Promise<undefined\| [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >;

patch:(data:Partial< [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html) >)=>Promise<void>;

put:(data: [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html))=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useFlow.html#useflow)





#### Parameters



- selector: undefined\|string\| [FlowSelector](https://console.integration.app/ref/react/interfaces/FlowSelector.html)

#### Returns {  flow:undefined\| [Flow](https://console.integration.app/ref/react/interfaces/Flow.html);  apply:(integrationKeys:string\[\])=>Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html)\[\]>;  reset:()=>Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >;  refresh:()=>Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >;  accessor:undefined\| [FlowAccessor](https://console.integration.app/ref/react/classes/FlowAccessor.html);  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(data: [CreateFlowRequest](https://console.integration.app/ref/react/interfaces/CreateFlowRequest.html))=>Promise<undefined\| [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >;  patch:(data:Partial< [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html) >)=>Promise<void>;  put:(data: [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html))=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR