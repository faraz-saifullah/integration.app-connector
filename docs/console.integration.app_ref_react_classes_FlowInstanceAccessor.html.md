---
url: "https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html"
title: "FlowInstanceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [FlowInstanceAccessor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html)

# Class FlowInstanceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#FlowInstanceAccessor), Expand)

- [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) <

[FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html),

[FlowInstanceSelector](https://console.integration.app/ref/react/interfaces/FlowInstanceSelector.html),

[CreateFlowInstanceRequest](https://console.integration.app/ref/react/types/CreateFlowInstanceRequest.html),

[UpdateFlowInstanceRequest](https://console.integration.app/ref/react/types/UpdateFlowInstanceRequest.html),

>
  - FlowInstanceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getpath) [enable](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#enable) [disable](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#disable) [updateToLatestFlow](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#updatetolatestflow) [setup](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#reset) [openConfiguration](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#openconfiguration) [openEditor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#openeditor) [embedEditor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#embededitor) [startRun](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#startrun) [run](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#run)

### Properties

[options](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#options) [client](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#client) [selector](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#selector)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#constructor)

- newFlowInstanceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [FlowInstanceSelector](https://console.integration.app/ref/react/interfaces/FlowInstanceSelector.html),

): [FlowInstanceAccessor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#constructorflowinstanceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [FlowInstanceSelector](https://console.integration.app/ref/react/interfaces/FlowInstanceSelector.html)

#### Returns [FlowInstanceAccessor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#get)

- get():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#get-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### getId [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#getid)

- getId():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getid-1)



#### Returns Promise<string>


### create [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#create)

- create(

data?:{

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

):Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#create-1)





#### Parameters



- `Optional` data: {

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

}

#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#put)

- put(

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

):Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#put-1)





#### Parameters



- data: {

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

}

#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#patch)

- patch(

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

):Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#patch-1)





#### Parameters



- data: {

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

}

#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#archive-1)



#### Returns Promise<void>


### delete [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#delete)

- delete():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#delete-1)



#### Returns Promise<void>


### `Protected` getPath [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### enable [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#enable)

- enable():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#enable-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### disable [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#disable)

- disable():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#disable-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### updateToLatestFlow [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#updatetolatestflow)

- updateToLatestFlow():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#updatetolatestflow-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### setup [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#setup)

- setup():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#setup-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### reset [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#reset)

- reset(options?: [ResetFlowInstanceOptions](https://console.integration.app/ref/react/interfaces/ResetFlowInstanceOptions.html)):Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#reset-1)





#### Parameters



- `Optional` options: [ResetFlowInstanceOptions](https://console.integration.app/ref/react/interfaces/ResetFlowInstanceOptions.html)

#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >

### openConfiguration [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#openconfiguration)

- openConfiguration(

\_\_namedParameters?: [OpenFlowInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceConfigurationOptions.html),

):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#openconfiguration-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenFlowInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceConfigurationOptions.html)

#### Returns Promise<void>

### openEditor [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#openeditor)

- openEditor(\_\_namedParameters?: [OpenFlowInstanceEditorOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceEditorOptions.html)):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#openeditor-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenFlowInstanceEditorOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceEditorOptions.html)

#### Returns Promise<void>

### embedEditor [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#embededitor)

- embedEditor(

\_\_namedParameters?:{mountTargetSelector?:string}& [OpenFlowInstanceEditorOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceEditorOptions.html),

):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#embededitor-1)





#### Parameters



- `Optional`\_\_namedParameters: {mountTargetSelector?:string}& [OpenFlowInstanceEditorOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceEditorOptions.html)

#### Returns Promise<void>

### startRun [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#startrun)

- startRun(options?: [RunFlowOptions](https://console.integration.app/ref/react/interfaces/RunFlowOptions.html)):Promise< [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#startrun-1)





#### Parameters



- `Optional` options: [RunFlowOptions](https://console.integration.app/ref/react/interfaces/RunFlowOptions.html)

#### Returns Promise< [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) >

### run [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#run)

- run(options?: [RunFlowOptions](https://console.integration.app/ref/react/interfaces/RunFlowOptions.html)):Promise< [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#run-1)





#### Parameters



- `Optional` options: [RunFlowOptions](https://console.integration.app/ref/react/interfaces/RunFlowOptions.html)

#### Returns Promise< [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) >

## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [FlowInstanceSelector](https://console.integration.app/ref/react/interfaces/FlowInstanceSelector.html);

type?: [WorkspaceElementType](https://console.integration.app/ref/react/enums/WorkspaceElementType.html);

}

### `Protected` client [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### `Protected` selector [Permalink](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html\#selector)

selector:string\| [FlowInstanceSelector](https://console.integration.app/ref/react/interfaces/FlowInstanceSelector.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#getpath) [enable](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#enable) [disable](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#disable) [updateToLatestFlow](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#updatetolatestflow) [setup](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#reset) [openConfiguration](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#openconfiguration) [openEditor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#openeditor) [embedEditor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#embededitor) [startRun](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#startrun) [run](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#run)

Properties

[options](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#options) [client](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#client) [selector](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html#selector)

MMNEPVFCICPMFPCPTTAAATR