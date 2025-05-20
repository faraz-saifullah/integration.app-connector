---
url: "https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html"
title: "ConnectionLevelFieldMappingAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ConnectionLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html)

# Class ConnectionLevelFieldMappingAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ConnectionLevelFieldMappingAccessor), Expand)

- [ConnectionLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html) <

[FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html),

[UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html),

>
  - ConnectionLevelFieldMappingAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#constructor)

### Methods

[uri](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#get) [create](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#setup) [openConfiguration](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#openconfiguration)

### Properties

[selector](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#connectionselector) [fieldMappingSelector](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#fieldmappingselector) [query](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#query)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#constructor)

- newConnectionLevelFieldMappingAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

connectionSelector:string,

fieldMappingSelector:string,

query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html),

): [ConnectionLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#constructorconnectionlevelfieldmappingaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- connectionSelector: string
- fieldMappingSelector: string
- query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

#### Returns [ConnectionLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html)

## Methods

### `Protected` uri [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#uri)

- uri(path?:string,query?:{}):string [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#uri-1)





#### Parameters



- `Optional` path: string
- `Optional` query: {}

#### Returns string

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#get)

- get(query?:{autoCreate?:boolean}):Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#get-1)





#### Parameters



- `Optional` query: {autoCreate?:boolean}

#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >

### create [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#create)

- create():Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#create-1)



#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >


### patch [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#patch)

- patch(

data:Partial< [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html) >,

):Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html) >

#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#put)

- put(data: [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html)):Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#put-1)





#### Parameters



- data: [UpdateFieldMappingInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingInstanceRequest.html)

#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#reset)

- reset():Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#reset-1)



#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >


### setup [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#setup)

- setup():Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#setup-1)



#### Returns Promise< [FieldMappingInstance](https://console.integration.app/ref/react/interfaces/FieldMappingInstance.html) >


### openConfiguration [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#openconfiguration)

- openConfiguration(

\_\_namedParameters?: [OpenFieldMappingInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFieldMappingInstanceConfigurationOptions.html),

):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#openconfiguration-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenFieldMappingInstanceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenFieldMappingInstanceConfigurationOptions.html)

#### Returns Promise<void>

## Properties

### `Protected` selector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#selector)

selector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### connectionSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#connectionselector)

connectionSelector:string

### fieldMappingSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#fieldmappingselector)

fieldMappingSelector:string

### query [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html\#query)

query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#constructor)

Methods

[uri](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#get) [create](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#setup) [openConfiguration](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#openconfiguration)

Properties

[selector](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#connectionselector) [fieldMappingSelector](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#fieldmappingselector) [query](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html#query)

MMNEPVFCICPMFPCPTTAAATR