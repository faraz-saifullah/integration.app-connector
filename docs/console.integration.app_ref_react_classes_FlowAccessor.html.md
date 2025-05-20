---
url: "https://console.integration.app/ref/react/classes/FlowAccessor.html"
title: "FlowAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [FlowAccessor](https://console.integration.app/ref/react/classes/FlowAccessor.html)

# Class FlowAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#FlowAccessor), Expand)

- [ElementAccessor](https://console.integration.app/ref/react/classes/ElementAccessor.html) < [Flow](https://console.integration.app/ref/react/interfaces/Flow.html), [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html), [FlowSelector](https://console.integration.app/ref/react/interfaces/FlowSelector.html) >
  - FlowAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/FlowAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/FlowAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/FlowAccessor.html#get) [put](https://console.integration.app/ref/react/classes/FlowAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/FlowAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/FlowAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/FlowAccessor.html#getpath) [apply](https://console.integration.app/ref/react/classes/FlowAccessor.html#apply) [reset](https://console.integration.app/ref/react/classes/FlowAccessor.html#reset)

### Properties

[options](https://console.integration.app/ref/react/classes/FlowAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#constructor)

- newFlowAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [FlowSelector](https://console.integration.app/ref/react/interfaces/FlowSelector.html),

): [FlowAccessor](https://console.integration.app/ref/react/classes/FlowAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#constructorflowaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [FlowSelector](https://console.integration.app/ref/react/interfaces/FlowSelector.html)

#### Returns [FlowAccessor](https://console.integration.app/ref/react/classes/FlowAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#get)

- get():Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#get-1)



#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >


### put [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#put)

- put(data: [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html)):Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#put-1)





#### Parameters



- data: [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html)

#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#patch)

- patch(data:Partial< [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html) >):Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html) >

#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#archive-1)



#### Returns Promise<void>


### getPath [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### apply [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#apply)

- apply(integrationKeys:string\[\]):Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#apply-1)





#### Parameters



- integrationKeys: string\[\]

#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html)\[\]>

### reset [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#reset)

- reset():Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html#reset-1)



#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >


## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/FlowAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

path:string;

selector:string\| [FlowSelector](https://console.integration.app/ref/react/interfaces/FlowSelector.html);

}

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/FlowAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/FlowAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/FlowAccessor.html#get) [put](https://console.integration.app/ref/react/classes/FlowAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/FlowAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/FlowAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/FlowAccessor.html#getpath) [apply](https://console.integration.app/ref/react/classes/FlowAccessor.html#apply) [reset](https://console.integration.app/ref/react/classes/FlowAccessor.html#reset)

Properties

[options](https://console.integration.app/ref/react/classes/FlowAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR