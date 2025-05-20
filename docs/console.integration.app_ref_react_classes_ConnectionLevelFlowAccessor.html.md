---
url: "https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html"
title: "ConnectionLevelFlowAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ConnectionLevelFlowAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html)

# Class ConnectionLevelFlowAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ConnectionLevelFlowAccessor), Expand)

- [ConnectionLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html) < [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html), [UpdateFlowInstanceRequest](https://console.integration.app/ref/react/types/UpdateFlowInstanceRequest.html) >
  - ConnectionLevelFlowAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#constructor)

### Methods

[uri](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#get) [create](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#setup) [enable](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#enable) [disable](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#disable) [run](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#run) [openConfiguration](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#openconfiguration) [openEditor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#openeditor)

### Properties

[selector](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#connectionselector) [flowSelector](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#flowselector) [query](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#query)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#constructor)

- newConnectionLevelFlowAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

connectionSelector:string,

flowSelector:string,

query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html),

): [ConnectionLevelFlowAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#constructorconnectionlevelflowaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- connectionSelector: string
- flowSelector: string
- query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

#### Returns [ConnectionLevelFlowAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html)

## Methods

### `Protected` uri [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#uri)

- uri(path?:string,query?:{}):string [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#uri-1)





#### Parameters



- `Optional` path: string
- `Optional` query: {}

#### Returns string

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#get)

- get(query?:{autoCreate?:boolean}):Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#get-1)





#### Parameters



- `Optional` query: {autoCreate?:boolean}

#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >

### create [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#create)

- create():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#create-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### patch [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#patch)

- patch(

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

links?:{key?:string;name?:string;filter?:any}\[\];

isCustomized?:boolean;

},

>;

enabled?:boolean;

customized?:{name?:boolean;nodes?:boolean};

archivedAt?:string;

},

>,

):Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#patch-1)





#### Parameters



- data: Partial<

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

links?:{key?:string;name?:string;filter?:any}\[\];

isCustomized?:boolean;

},

>;

enabled?:boolean;

customized?:{name?:boolean;nodes?:boolean};

archivedAt?:string;

},

>

#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#put)

- put(

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

):Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#put-1)





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

### archive [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#reset)

- reset():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#reset-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### setup [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#setup)

- setup():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#setup-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### enable [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#enable)

- enable():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#enable-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### disable [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#disable)

- disable():Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#disable-1)



#### Returns Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >


### run [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#run)

- run(options:{nodeKey?:string;input?:any}):Promise< [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#run-1)





#### Parameters



- options: {nodeKey?:string;input?:any}

#### Returns Promise< [FlowRun](https://console.integration.app/ref/react/interfaces/FlowRun.html) >

### openConfiguration [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#openconfiguration)

- openConfiguration(options?: [OpenFlowInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceConfigurationOptions.html)):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#openconfiguration-1)





#### Parameters



- `Optional` options: [OpenFlowInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceConfigurationOptions.html)

#### Returns Promise<void>

### openEditor [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#openeditor)

- openEditor(options?: [OpenFlowInstanceEditorOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceEditorOptions.html)):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#openeditor-1)





#### Parameters



- `Optional` options: [OpenFlowInstanceEditorOptions](https://console.integration.app/ref/react/interfaces/OpenFlowInstanceEditorOptions.html)

#### Returns Promise<void>

## Properties

### `Protected` selector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#selector)

selector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### connectionSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#connectionselector)

connectionSelector:string

### flowSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#flowselector)

flowSelector:string

### query [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html\#query)

query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#constructor)

Methods

[uri](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#get) [create](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#setup) [enable](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#enable) [disable](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#disable) [run](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#run) [openConfiguration](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#openconfiguration) [openEditor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#openeditor)

Properties

[selector](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#connectionselector) [flowSelector](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#flowselector) [query](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html#query)

MMNEPVFCICPMFPCPTTAAATR