---
url: "https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html"
title: "IntegrationLevelFlowAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationLevelFlowAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html)

# Class IntegrationLevelFlowAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationLevelFlowAccessor), Expand)

- [IntegrationLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html) < [Flow](https://console.integration.app/ref/react/interfaces/Flow.html), [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html) >
  - IntegrationLevelFlowAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#reset)

### Properties

[elementSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#elementselector) [elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#integrationselector) [flowSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#flowselector)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#constructor)

- newIntegrationLevelFlowAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

flowSelector:string,

): [IntegrationLevelFlowAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#constructorintegrationlevelflowaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string
- flowSelector: string

#### Returns [IntegrationLevelFlowAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#get)

- get():Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#get-1)



#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >


### patch [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#patch)

- patch(data:Partial< [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html) >):Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html) >

#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#put)

- put(data: [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html)):Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#put-1)





#### Parameters



- data: [UpdateFlowRequest](https://console.integration.app/ref/react/interfaces/UpdateFlowRequest.html)

#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#reset)

- reset():Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#reset-1)



#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >


## Properties

### `Protected` elementSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#elementselector)

elementSelector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### integrationSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#integrationselector)

integrationSelector:string

### flowSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html\#flowselector)

flowSelector:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#reset)

Properties

[elementSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#elementselector) [elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#integrationselector) [flowSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html#flowselector)

MMNEPVFCICPMFPCPTTAAATR