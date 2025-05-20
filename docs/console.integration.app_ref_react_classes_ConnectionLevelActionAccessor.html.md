---
url: "https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html"
title: "ConnectionLevelActionAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ConnectionLevelActionAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html)

# Class ConnectionLevelActionAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ConnectionLevelActionAccessor), Expand)

- [ConnectionLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html) < [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html), [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html) >
  - ConnectionLevelActionAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#constructor)

### Methods

[uri](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#get) [create](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#setup) [run](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#run)

### Properties

[selector](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#connectionselector) [actionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#actionselector) [query](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#query)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#constructor)

- newConnectionLevelActionAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

connectionSelector:string,

actionSelector:string,

query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html),

): [ConnectionLevelActionAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#constructorconnectionlevelactionaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- connectionSelector: string
- actionSelector: string
- query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

#### Returns [ConnectionLevelActionAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html)

## Methods

### `Protected` uri [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#uri)

- uri(path?:string,query?:{}):string [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#uri-1)





#### Parameters



- `Optional` path: string
- `Optional` query: {}

#### Returns string

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#get)

- get(query?:{autoCreate?:boolean}):Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#get-1)





#### Parameters



- `Optional` query: {autoCreate?:boolean}

#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >

### create [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#create)

- create():Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#create-1)



#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >


### patch [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#patch)

- patch(data:Partial< [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html) >):Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html) >

#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#put)

- put(data: [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html)):Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#put-1)





#### Parameters



- data: [UpdateActionInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateActionInstanceRequest.html)

#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#reset)

- reset():Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#reset-1)



#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >


### setup [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#setup)

- setup():Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#setup-1)



#### Returns Promise< [ActionInstance](https://console.integration.app/ref/react/interfaces/ActionInstance.html) >


### run [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#run)

- run(input?:any):Promise< [ActionRunResponse](https://console.integration.app/ref/react/interfaces/ActionRunResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#run-1)





#### Parameters



- `Optional` input: any

#### Returns Promise< [ActionRunResponse](https://console.integration.app/ref/react/interfaces/ActionRunResponse.html) >

## Properties

### `Protected` selector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#selector)

selector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### connectionSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#connectionselector)

connectionSelector:string

### actionSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#actionselector)

actionSelector:string

### query [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html\#query)

query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#constructor)

Methods

[uri](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#get) [create](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#setup) [run](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#run)

Properties

[selector](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#connectionselector) [actionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#actionselector) [query](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html#query)

MMNEPVFCICPMFPCPTTAAATR