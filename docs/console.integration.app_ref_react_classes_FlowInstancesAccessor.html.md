---
url: "https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html"
title: "FlowInstancesAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [FlowInstancesAccessor](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html)

# Class FlowInstancesAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#FlowInstancesAccessor), Expand)

- [ElementInstanceListAccessor](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html) < [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html), [FindFlowInstancesQuery](https://console.integration.app/ref/react/types/FindFlowInstancesQuery.html) >
  - FlowInstancesAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#find) [create](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#create)

### Properties

[client](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#client)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html\#constructor)

- newFlowInstancesAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

): [FlowInstancesAccessor](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#constructorflowinstancesaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [FlowInstancesAccessor](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html\#find)

- find(query?: [FindFlowInstancesQuery](https://console.integration.app/ref/react/types/FindFlowInstancesQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >> [Permalink](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindFlowInstancesQuery](https://console.integration.app/ref/react/types/FindFlowInstancesQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) >>

### create [Permalink](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html\#create)

- create(

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

):Promise< [FlowInstance](https://console.integration.app/ref/react/interfaces/FlowInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#create-1)





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

## Properties

### `Protected` client [Permalink](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#find) [create](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#create)

Properties

[client](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html#client)

MMNEPVFCICPMFPCPTTAAATR