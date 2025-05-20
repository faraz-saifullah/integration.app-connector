---
url: "https://console.integration.app/ref/react/functions/useFlowInstance.html"
title: "useFlowInstance | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [useFlowInstance](https://console.integration.app/ref/react/functions/useFlowInstance.html)

# Function useFlowInstance

- useFlowInstance(

selector:undefined\|string\| [FlowInstanceSelector](https://console.integration.app/ref/react/interfaces/FlowInstanceSelector.html),

):{

flowInstance:undefined\| [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html);

accessor:undefined\| [FlowInstanceAccessor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html);

refresh:()=>Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >;

enable:()=>Promise<void>;

disable:()=>Promise<void>;

reset:(options?: [ResetFlowInstanceOptions](https://console.integration.app/ref/react/interfaces/ResetFlowInstanceOptions.html))=>Promise<void>;

setup:()=>Promise<void>;

openConfiguration:(

options: [OpenFlowInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceConfigurationOptions.html),

)=>Promise<undefined\|void>;

openEditor:(

options?: [OpenFlowInstanceEditorOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceEditorOptions.html),

)=>Promise<undefined\|void>;

run:(options?: [RunFlowOptions](https://console.integration.app/ref/react/interfaces/RunFlowOptions.html))=>Promise<undefined\| [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) >;

startRun:(options?: [RunFlowOptions](https://console.integration.app/ref/react/interfaces/RunFlowOptions.html))=>Promise<undefined\| [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) >;

loading:boolean;

saving:boolean;

error:any;

refreshing:boolean;

create:(

data:{

name?:string;

userId?:string;

integrationId?:string;

connectionId?:string;

parameters?:any;

flowId?:string;

instanceKey?:string;

nodes?:Record<

string,

{

concurrency?:number;

type?:string;

name?:string;

userConfig?:any;

config?:any;

onError?:"stop"

\|"continue";

ui?:any;

links?:{key?:string;name?:string;filter?:any}\[\];

isCustomized?:boolean;

},

>;

enabled?:boolean;

customized?:{name?:boolean;nodes?:boolean};

},

)=>Promise<undefined\| [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >;

patch:(

data:Partial<

{

name?:string;

parameters?:any;

nodes?:Record<

string,

{

concurrency?:number;

type?:string;

name?:string;

userConfig?:any;

config?:any;

onError?:"stop"

\|"continue";

links?:{key?: (...) \| (...);name?: (...) \| (...);filter?:any}\[\];

isCustomized?:boolean;

},

>;

enabled?:boolean;

customized?:{name?:boolean;nodes?:boolean};

archivedAt?:string;

},

>,

)=>Promise<void>;

put:(

data:{

name?:string;

parameters?:any;

nodes?:Record<

string,

{

concurrency?:number;

type?:string;

name?:string;

userConfig?:any;

config?:any;

onError?:"stop"

\|"continue";

links?:{key?:string;name?:string;filter?:any}\[\];

isCustomized?:boolean;

},

>;

enabled?:boolean;

customized?:{name?:boolean;nodes?:boolean};

archivedAt?:string;

},

)=>Promise<void>;

archive:()=>Promise<void>;

} [Permalink](https://console.integration.app/ref/react/functions/useFlowInstance.html#useflowinstance)





#### Parameters



- selector: undefined\|string\| [FlowInstanceSelector](https://console.integration.app/ref/react/interfaces/FlowInstanceSelector.html)

#### Returns {  flowInstance:undefined\| [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html);  accessor:undefined\| [FlowInstanceAccessor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html);  refresh:()=>Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >;  enable:()=>Promise<void>;  disable:()=>Promise<void>;  reset:(options?: [ResetFlowInstanceOptions](https://console.integration.app/ref/react/interfaces/ResetFlowInstanceOptions.html))=>Promise<void>;  setup:()=>Promise<void>;  openConfiguration:(  options: [OpenFlowInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceConfigurationOptions.html),  )=>Promise<undefined\|void>;  openEditor:(  options?: [OpenFlowInstanceEditorOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceEditorOptions.html),  )=>Promise<undefined\|void>;  run:(options?: [RunFlowOptions](https://console.integration.app/ref/react/interfaces/RunFlowOptions.html))=>Promise<undefined\| [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) >;  startRun:(options?: [RunFlowOptions](https://console.integration.app/ref/react/interfaces/RunFlowOptions.html))=>Promise<undefined\| [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) >;  loading:boolean;  saving:boolean;  error:any;  refreshing:boolean;  create:(  data:{  name?:string;  userId?:string;  integrationId?:string;  connectionId?:string;  parameters?:any;  flowId?:string;  instanceKey?:string;  nodes?:Record<  string,  {  concurrency?:number;  type?:string;  name?:string;  userConfig?:any;  config?:any;  onError?:"stop"  \|"continue";  ui?:any;  links?:{key?:string;name?:string;filter?:any}\[\];  isCustomized?:boolean;  },  >;  enabled?:boolean;  customized?:{name?:boolean;nodes?:boolean};  },  )=>Promise<undefined\| [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >;  patch:(  data:Partial<  {  name?:string;  parameters?:any;  nodes?:Record<  string,  {  concurrency?:number;  type?:string;  name?:string;  userConfig?:any;  config?:any;  onError?:"stop"  \|"continue";  links?:{key?: (...) \| (...);name?: (...) \| (...);filter?:any}\[\];  isCustomized?:boolean;  },  >;  enabled?:boolean;  customized?:{name?:boolean;nodes?:boolean};  archivedAt?:string;  },  >,  )=>Promise<void>;  put:(  data:{  name?:string;  parameters?:any;  nodes?:Record<  string,  {  concurrency?:number;  type?:string;  name?:string;  userConfig?:any;  config?:any;  onError?:"stop"  \|"continue";  links?:{key?:string;name?:string;filter?:any}\[\];  isCustomized?:boolean;  },  >;  enabled?:boolean;  customized?:{name?:boolean;nodes?:boolean};  archivedAt?:string;  },  )=>Promise<void>;  archive:()=>Promise<void>;  }

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

MMNEPVFCICPMFPCPTTAAATR