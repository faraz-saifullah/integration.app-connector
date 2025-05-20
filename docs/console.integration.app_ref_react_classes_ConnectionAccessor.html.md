---
url: "https://console.integration.app/ref/react/classes/ConnectionAccessor.html"
title: "ConnectionAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ConnectionAccessor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html)

# Class ConnectionAccessor

##### Index

### Accessors

[actions](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#actions) [flows](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#flows) [dataSources](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datasources) [fieldMappings](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#fieldmappings) [proxy](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#proxy)

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#constructor)

### Methods

[action](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#action) [flow](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#flow) [dataSource](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datasource) [fieldMapping](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#fieldmapping) [get](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#archive) [request](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#request) [operation](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#operation) [dataCollection](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datacollection) [dataDirectory](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datadirectory) [reconnect](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#reconnect) [openReconnectUI](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#openreconnectui) [refreshCredentials](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#refreshcredentials) [getPath](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#getpath)

### Properties

[client](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#connectionselector)

## Accessors

### actions [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#actions)

- getactions(): [ConnectionLevelActionsAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelActionsAccessor.html)



#### Returns [ConnectionLevelActionsAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelActionsAccessor.html)


### flows [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#flows)

- getflows(): [ConnectionLevelFlowsAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowsAccessor.html)



#### Returns [ConnectionLevelFlowsAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowsAccessor.html)


### dataSources [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#datasources)

- getdataSources(): [ConnectionLevelDataSourcesAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourcesAccessor.html)



#### Returns [ConnectionLevelDataSourcesAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourcesAccessor.html)


### fieldMappings [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#fieldmappings)

- getfieldMappings(): [ConnectionLevelFieldMappingsAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingsAccessor.html)



#### Returns [ConnectionLevelFieldMappingsAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingsAccessor.html)


### proxy [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#proxy)

- getproxy(): [ConnectionProxy](https://console.integration.app/ref/react/classes/ConnectionProxy.html)



#### Returns [ConnectionProxy](https://console.integration.app/ref/react/classes/ConnectionProxy.html)


## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#constructor)

- newConnectionAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

connectionSelector:string,

): [ConnectionAccessor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#constructorconnectionaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- connectionSelector: string

#### Returns [ConnectionAccessor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html)

## Methods

### action [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#action)

- action(

actionSelector:string,

query?: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html),

): [ConnectionLevelActionAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#action-1)





#### Parameters



- actionSelector: string
- `Optional` query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

#### Returns [ConnectionLevelActionAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelActionAccessor.html)

### flow [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#flow)

- flow(

flowSelector:string,

query?: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html),

): [ConnectionLevelFlowAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#flow-1)





#### Parameters



- flowSelector: string
- `Optional` query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

#### Returns [ConnectionLevelFlowAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFlowAccessor.html)

### dataSource [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#datasource)

- dataSource(

dataSourceSelector:string,

query?: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html),

): [ConnectionLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datasource-1)





#### Parameters



- dataSourceSelector: string
- `Optional` query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

#### Returns [ConnectionLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelDataSourceAccessor.html)

### fieldMapping [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#fieldmapping)

- fieldMapping(

fieldMappingSelector:string,

query?: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html),

): [ConnectionLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#fieldmapping-1)





#### Parameters



- fieldMappingSelector: string
- `Optional` query: [InstanceKeyQuery](https://console.integration.app/ref/react/types/_integration-app_react.InstanceKeyQuery.html)

#### Returns [ConnectionLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/ConnectionLevelFieldMappingAccessor.html)

### get [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#get)

- get(query?:{includeSecrets?:boolean}):Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#get-1)





#### Parameters



- `Optional` query: {includeSecrets?:boolean}

#### Returns Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#patch)

- patch(data: [UpdateConnectionRequest](https://console.integration.app/ref/react/classes/UpdateConnectionRequest.html)):Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#patch-1)





#### Parameters



- data: [UpdateConnectionRequest](https://console.integration.app/ref/react/classes/UpdateConnectionRequest.html)

#### Returns Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#put)

- put(data: [UpdateConnectionRequest](https://console.integration.app/ref/react/classes/UpdateConnectionRequest.html)):Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#put-1)





#### Parameters



- data: [UpdateConnectionRequest](https://console.integration.app/ref/react/classes/UpdateConnectionRequest.html)

#### Returns Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#archive-1)



#### Returns Promise<void>


### request [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#request)

- request(path:string,data?:any):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#request-1)





#### Parameters



- path: string
- `Optional` data: any

#### Returns Promise<any>

### operation [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#operation)

- operation(key:string): [ConnectionOperationAccessor](https://console.integration.app/ref/react/classes/ConnectionOperationAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#operation-1)





#### Parameters



- key: string

#### Returns [ConnectionOperationAccessor](https://console.integration.app/ref/react/classes/ConnectionOperationAccessor.html)

### dataCollection [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#datacollection)

- dataCollection(

key:string,

parameters?:Record<string,any>,

): [ConnectionDataCollectionAccessor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datacollection-1)





#### Parameters



- key: string
- `Optional` parameters: Record<string,any>

#### Returns [ConnectionDataCollectionAccessor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html)

### dataDirectory [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#datadirectory)

- dataDirectory(

key:string,

parameters?:Record<string,any>,

): [ConnectionDataDirectoryAccessor](https://console.integration.app/ref/react/classes/ConnectionDataDirectoryAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datadirectory-1)





#### Parameters



- key: string
- `Optional` parameters: Record<string,any>

#### Returns [ConnectionDataDirectoryAccessor](https://console.integration.app/ref/react/classes/ConnectionDataDirectoryAccessor.html)

### reconnect [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#reconnect)

- reconnect(

\_\_namedParameters?:{parameters?:any;authOptionKey?:string},

):Promise<undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#reconnect-1)





#### Parameters



- `Optional`\_\_namedParameters: {parameters?:any;authOptionKey?:string}

#### Returns Promise<undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html) >

### openReconnectUI [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#openreconnectui)

- openReconnectUI(\_\_namedParameters?: [OpenConfigurationOptions](https://console.integration.app/ref/react/interfaces/_integration-app_react.OpenConfigurationOptions.html)):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#openreconnectui-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenConfigurationOptions](https://console.integration.app/ref/react/interfaces/_integration-app_react.OpenConfigurationOptions.html)

#### Returns Promise<void>

### refreshCredentials [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#refreshcredentials)

- refreshCredentials():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#refreshcredentials-1)



#### Returns Promise<void>


### getPath [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#getpath)

- getPath(subpath?:string,query?:Record<string,any>):string [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#getpath-1)





#### Parameters



- `Optional` subpath: string
- `Optional` query: Record<string,any>

#### Returns string

## Properties

### client [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### connectionSelector [Permalink](https://console.integration.app/ref/react/classes/ConnectionAccessor.html\#connectionselector)

connectionSelector:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Accessors

[actions](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#actions) [flows](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#flows) [dataSources](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datasources) [fieldMappings](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#fieldmappings) [proxy](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#proxy)

Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#constructor)

Methods

[action](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#action) [flow](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#flow) [dataSource](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datasource) [fieldMapping](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#fieldmapping) [get](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#archive) [request](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#request) [operation](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#operation) [dataCollection](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datacollection) [dataDirectory](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#datadirectory) [reconnect](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#reconnect) [openReconnectUI](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#openreconnectui) [refreshCredentials](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#refreshcredentials) [getPath](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#getpath)

Properties

[client](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#client) [connectionSelector](https://console.integration.app/ref/react/classes/ConnectionAccessor.html#connectionselector)

MMNEPVFCICPMFPCPTTAAATR