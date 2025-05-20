---
url: "https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html"
title: "ConnectionLevelElementAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [@integration-app/react](https://console.integration.app/ref/react/modules/_integration-app_react.html)
- [ConnectionLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html)

# Class ConnectionLevelElementAccessor<Element, UpdateElement>

#### Type Parameters

- Element
- UpdateElement

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#@integration-app/react.ConnectionLevelElementAccessor))

- ConnectionLevelElementAccessor
  - [ConnectionLevelActionAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html)
  - [ConnectionLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html)
  - [ConnectionLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html)
  - [ConnectionLevelFlowAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html)

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructor)

### Methods

[uri](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#get) [create](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#setup)

### Properties

[client](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#connectionselector) [selector](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#elementkey) [query](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#query) [endpoint](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#endpoint)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructor)

- newConnectionLevelElementAccessor< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorelement), [UpdateElement](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorupdateelement) >(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

connectionSelector:string,

selector:string,

elementKey:string,

query:Record<string,any>,

): [ConnectionLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html) < [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorelement), [UpdateElement](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorupdateelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessor)



#### Type Parameters



- Element
- UpdateElement

#### Parameters

- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- connectionSelector: string
- selector: string
- elementKey: string
- query: Record<string,any>

#### Returns [ConnectionLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html) < [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructorconnectionlevelelementaccessorelement), [UpdateElement](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructorconnectionlevelelementaccessorupdateelement) >

## Methods

### `Protected` uri [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#uri)

- uri(path?:string,query?:{}):string [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#uri-1)





#### Parameters



- `Optional` path: string
- `Optional` query: {}

#### Returns string

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#get)

- get(query?:{autoCreate?:boolean}):Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#get-1)





#### Parameters



- `Optional` query: {autoCreate?:boolean}

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructorconnectionlevelelementaccessorelement) >

### create [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#create)

- create():Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#create-1)



#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructorconnectionlevelelementaccessorelement) >


### patch [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#patch)

- patch(data:Partial< [UpdateElement](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorupdateelement) >):Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateElement](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorupdateelement) >

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructorconnectionlevelelementaccessorelement) >

### put [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#put)

- put(data: [UpdateElement](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorupdateelement)):Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#put-1)





#### Parameters



- data: [UpdateElement](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorupdateelement)

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructorconnectionlevelelementaccessorelement) >

### archive [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#reset)

- reset():Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#reset-1)



#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructorconnectionlevelelementaccessorelement) >


### setup [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#setup)

- setup():Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructorconnectionlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#setup-1)



#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#constructorconnectionlevelelementaccessorelement) >


## Properties

### `Protected` client [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### `Protected` connectionSelector [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#connectionselector)

connectionSelector:string

### `Protected` selector [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#selector)

selector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#elementkey)

elementKey:string

### `Protected` query [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#query)

query:Record<string,any>

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html\#endpoint)

endpoint:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#constructor)

Methods

[uri](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#get) [create](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#setup)

Properties

[client](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#connectionselector) [selector](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#elementkey) [query](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#query) [endpoint](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html#endpoint)

MMNEPVFCICPMFPCPTTAAATR