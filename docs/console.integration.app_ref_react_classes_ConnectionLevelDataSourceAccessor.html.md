---
url: "https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html"
title: "ConnectionLevelDataSourceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ConnectionLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html)

# Class ConnectionLevelDataSourceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ConnectionLevelDataSourceAccessor), Expand)

- [ConnectionLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.ConnectionLevelElementAccessor.html) <

[DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html),

[UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html),

>
  - ConnectionLevelDataSourceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#constructor)

### Methods

[uri](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#get) [create](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#setup) [openConfiguration](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#openconfiguration)

### Properties

[selector](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#connectionselector) [dataSourceSelector](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#datasourceselector) [query](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#query)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#constructor)

- newConnectionLevelDataSourceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

connectionSelector:string,

dataSourceSelector:string,

query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html),

): [ConnectionLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#constructorconnectionleveldatasourceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- connectionSelector: string
- dataSourceSelector: string
- query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

#### Returns [ConnectionLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html)

## Methods

### `Protected` uri [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#uri)

- uri(path?:string,query?:{}):string [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#uri-1)





#### Parameters



- `Optional` path: string
- `Optional` query: {}

#### Returns string

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#get)

- get(query?:{autoCreate?:boolean}):Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#get-1)





#### Parameters



- `Optional` query: {autoCreate?:boolean}

#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >

### create [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#create)

- create():Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#create-1)



#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >


### patch [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#patch)

- patch(

data:Partial< [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html) >,

):Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html) >

#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#put)

- put(data: [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html)):Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#put-1)





#### Parameters



- data: [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html)

#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#reset)

- reset():Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#reset-1)



#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >


### setup [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#setup)

- setup():Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#setup-1)



#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >


### openConfiguration [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#openconfiguration)

- openConfiguration(options?: [OpenDataSourceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenDataSourceConfigurationOptions.html)):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#openconfiguration-1)





#### Parameters



- `Optional` options: [OpenDataSourceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenDataSourceConfigurationOptions.html)

#### Returns Promise<void>

## Properties

### `Protected` selector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#selector)

selector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### connectionSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#connectionselector)

connectionSelector:string

### dataSourceSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#datasourceselector)

dataSourceSelector:string

### query [Permalink](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html\#query)

query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#constructor)

Methods

[uri](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#uri) [getUniqueIdentifier](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#get) [create](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#create) [patch](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#reset) [setup](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#setup) [openConfiguration](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#openconfiguration)

Properties

[selector](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#selector) [elementKey](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#connectionselector) [dataSourceSelector](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#datasourceselector) [query](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html#query)

MMNEPVFCICPMFPCPTTAAATR