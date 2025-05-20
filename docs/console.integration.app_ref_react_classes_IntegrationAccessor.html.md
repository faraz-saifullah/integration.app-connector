---
url: "https://console.integration.app/ref/react/classes/IntegrationAccessor.html"
title: "IntegrationAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationAccessor](https://console.integration.app/ref/react/classes/IntegrationAccessor.html)

# Class IntegrationAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationAccessor), Expand)

- [ElementAccessor](https://console.integration.app/ref/react/classes/ElementAccessor.html) < [Integration](https://console.integration.app/ref/react/interfaces/Integration.html), [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html) >
  - IntegrationAccessor

##### Index

### Accessors

[actions](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#actions) [flows](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#flows) [dataSources](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#datasources) [fieldMappings](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#fieldmappings)

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#get) [put](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getpath) [action](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#action) [flow](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#flow) [dataSource](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#datasource) [fieldMapping](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#fieldmapping) [setup](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#setup) [resetParameters](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#resetparameters) [getConnectorSpec](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getconnectorspec) [open](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#open) [openNewConnection](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#opennewconnection) [connect](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#connect) [createConnection](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#createconnection) [disconnect](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#disconnect) [getOperations](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getoperations) [getOperation](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getoperation) [getDataCollections](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatacollections) [getDataCollection](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatacollection) [getDataLocations](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatalocations) [getDataLocation](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatalocation)

### Properties

[options](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#options) [baseUri](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#baseuri)

## Accessors

### actions [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#actions)

- getactions(): [IntegrationLevelActionsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html)



#### Returns [IntegrationLevelActionsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html)


### flows [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#flows)

- getflows(): [IntegrationLevelFlowsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html)



#### Returns [IntegrationLevelFlowsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html)


### dataSources [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#datasources)

- getdataSources(): [IntegrationLevelDataSourcesListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html)



#### Returns [IntegrationLevelDataSourcesListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html)


### fieldMappings [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#fieldmappings)

- getfieldMappings(): [IntegrationLevelFieldMappingsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html)



#### Returns [IntegrationLevelFieldMappingsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html)


## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#constructor)

- newIntegrationAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

): [IntegrationAccessor](https://console.integration.app/ref/react/classes/IntegrationAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#constructorintegrationaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string

#### Returns [IntegrationAccessor](https://console.integration.app/ref/react/classes/IntegrationAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#get)

- get():Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#get-1)



#### Returns Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >


### put [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#put)

- put(data: [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html)):Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#put-1)





#### Parameters



- data: [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html)

#### Returns Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#patch)

- patch(data:Partial< [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html) >):Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateIntegrationRequest](https://console.integration.app/ref/react/interfaces/UpdateIntegrationRequest.html) >

#### Returns Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#archive-1)



#### Returns Promise<void>


### getPath [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### action [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#action)

- action(actionSelector:string): [IntegrationLevelActionAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#action-1)





#### Parameters



- actionSelector: string

#### Returns [IntegrationLevelActionAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionAccessor.html)

### flow [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#flow)

- flow(flowSelector:string): [IntegrationLevelFlowAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#flow-1)





#### Parameters



- flowSelector: string

#### Returns [IntegrationLevelFlowAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html)

### dataSource [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#datasource)

- dataSource(dataSourceSelector:string): [IntegrationLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#datasource-1)





#### Parameters



- dataSourceSelector: string

#### Returns [IntegrationLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html)

### fieldMapping [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#fieldmapping)

- fieldMapping(fieldMappingSelector:string): [IntegrationLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#fieldmapping-1)





#### Parameters



- fieldMappingSelector: string

#### Returns [IntegrationLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html)

### setup [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#setup)

- setup():Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#setup-1)



#### Returns Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >


### resetParameters [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#resetparameters)

- resetParameters():Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#resetparameters-1)



#### Returns Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >


### getConnectorSpec [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getconnectorspec)

- getConnectorSpec():Promise< [ConnectionSpec](https://console.integration.app/ref/react/classes/ConnectionSpec.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getconnectorspec-1)



#### Returns Promise< [ConnectionSpec](https://console.integration.app/ref/react/classes/ConnectionSpec.html) >


### open [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#open)

- open(

\_\_namedParameters?: [OpenIntegrationUIIntegrationConfigurationOptions](https://console.integration.app/ref/react/interfaces/_integration-app_react.OpenIntegrationUIIntegrationConfigurationOptions.html),

):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#open-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenIntegrationUIIntegrationConfigurationOptions](https://console.integration.app/ref/react/interfaces/_integration-app_react.OpenIntegrationUIIntegrationConfigurationOptions.html)

#### Returns Promise<void>

### openNewConnection [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#opennewconnection)

- openNewConnection(

\_\_namedParameters?: [OpenNewConnectionOptions](https://console.integration.app/ref/react/interfaces/OpenNewConnectionOptions.html),

):Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#opennewconnection-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenNewConnectionOptions](https://console.integration.app/ref/react/interfaces/OpenNewConnectionOptions.html)

#### Returns Promise< [Connection](https://console.integration.app/ref/react/classes/Connection.html) >

### connect [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#connect)

- connect(

\_\_namedParameters?: { name?: string \| undefined; parameters?: any; authOptionKey?: string \| undefined; allowMultipleConnections?: boolean \| undefined; } & ({ sameWindow: true; redirectUri: string; } \| { ...; }),

):Promise<undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#connect-1)





#### Parameters



- `Optional`\_\_namedParameters: { name?: string \| undefined; parameters?: any; authOptionKey?: string \| undefined; allowMultipleConnections?: boolean \| undefined; } & ({ sameWindow: true; redirectUri: string; } \| { ...; })

#### Returns Promise<undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html) >

### createConnection [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#createconnection)

- createConnection(

\_\_namedParameters:{parameters?:any;name?:string},

):Promise<undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#createconnection-1)





#### Parameters



- \_\_namedParameters: {parameters?:any;name?:string}

#### Returns Promise<undefined\| [Connection](https://console.integration.app/ref/react/classes/Connection.html) >

### disconnect [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#disconnect)

- disconnect():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#disconnect-1)



#### Returns Promise<void>


### getOperations [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getoperations)

- getOperations():Promise< [OperationListItem](https://console.integration.app/ref/react/interfaces/OperationListItem.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getoperations-1)



#### Returns Promise< [OperationListItem](https://console.integration.app/ref/react/interfaces/OperationListItem.html)\[\]>


### getOperation [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getoperation)

- getOperation(key:string):Promise< [OperationSpec](https://console.integration.app/ref/react/interfaces/OperationSpec.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getoperation-1)





#### Parameters



- key: string

#### Returns Promise< [OperationSpec](https://console.integration.app/ref/react/interfaces/OperationSpec.html) >

### getDataCollections [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getdatacollections)

- getDataCollections():Promise< [DataLocationListItem](https://console.integration.app/ref/react/interfaces/DataLocationListItem.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatacollections-1)



#### Returns Promise< [DataLocationListItem](https://console.integration.app/ref/react/interfaces/DataLocationListItem.html)\[\]>


### getDataCollection [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getdatacollection)

- getDataCollection(key:string):Promise< [DataLocationSpec](https://console.integration.app/ref/react/types/DataLocationSpec.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatacollection-1)





#### Parameters



- key: string

#### Returns Promise< [DataLocationSpec](https://console.integration.app/ref/react/types/DataLocationSpec.html) >

### getDataLocations [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getdatalocations)

- getDataLocations():Promise< [DataLocationListItem](https://console.integration.app/ref/react/interfaces/DataLocationListItem.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatalocations-1)



#### Returns Promise< [DataLocationListItem](https://console.integration.app/ref/react/interfaces/DataLocationListItem.html)\[\]>


### getDataLocation [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#getdatalocation)

- getDataLocation(key:string):Promise< [DataLocationSpec](https://console.integration.app/ref/react/types/DataLocationSpec.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatalocation-1)





#### Parameters



- key: string

#### Returns Promise< [DataLocationSpec](https://console.integration.app/ref/react/types/DataLocationSpec.html) >

## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#options)

options:{client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);path:string;selector:string}

### baseUri [Permalink](https://console.integration.app/ref/react/classes/IntegrationAccessor.html\#baseuri)

baseUri:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Accessors

[actions](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#actions) [flows](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#flows) [dataSources](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#datasources) [fieldMappings](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#fieldmappings)

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#get) [put](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getpath) [action](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#action) [flow](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#flow) [dataSource](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#datasource) [fieldMapping](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#fieldmapping) [setup](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#setup) [resetParameters](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#resetparameters) [getConnectorSpec](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getconnectorspec) [open](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#open) [openNewConnection](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#opennewconnection) [connect](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#connect) [createConnection](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#createconnection) [disconnect](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#disconnect) [getOperations](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getoperations) [getOperation](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getoperation) [getDataCollections](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatacollections) [getDataCollection](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatacollection) [getDataLocations](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatalocations) [getDataLocation](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#getdatalocation)

Properties

[options](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#options) [baseUri](https://console.integration.app/ref/react/classes/IntegrationAccessor.html#baseuri)

MMNEPVFCICPMFPCPTTAAATR