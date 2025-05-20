---
url: "https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html"
title: "DataSourceInstanceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [DataSourceInstanceAccessor](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html)

# Class DataSourceInstanceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#DataSourceInstanceAccessor), Expand)

- [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) <

[DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html),

[DataSourceInstanceSelector](https://console.integration.app/ref/react/interfaces/DataSourceInstanceSelector.html),

[CreateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataSourceInstanceRequest.html),

[UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html),

>
  - DataSourceInstanceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getpath) [setup](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#reset) [openConfiguration](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#openconfiguration) [unifiedFieldsToNative](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#unifiedfieldstonative) [getCollection](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getcollection) [listRecords](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#listrecords) [matchRecord](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#matchrecord) [searchRecords](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#searchrecords) [findRecordById](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#findrecordbyid) [createRecord](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#createrecord) [updateRecord](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#updaterecord) [deleteRecord](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#deleterecord) [findRecords](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#findrecords)

### Properties

[options](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#options) [client](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#client)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#constructor)

- newDataSourceInstanceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [DataSourceInstanceSelector](https://console.integration.app/ref/react/interfaces/DataSourceInstanceSelector.html),

): [DataSourceInstanceAccessor](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#constructordatasourceinstanceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [DataSourceInstanceSelector](https://console.integration.app/ref/react/interfaces/DataSourceInstanceSelector.html)

#### Returns [DataSourceInstanceAccessor](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#get)

- get():Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#get-1)



#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >


### getId [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#getid)

- getId():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getid-1)



#### Returns Promise<string>


### create [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#create)

- create(data?: [CreateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataSourceInstanceRequest.html)):Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#create-1)





#### Parameters



- `Optional` data: [CreateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataSourceInstanceRequest.html)

#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#put)

- put(data: [CreateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataSourceInstanceRequest.html)):Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#put-1)





#### Parameters



- data: [CreateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateDataSourceInstanceRequest.html)

#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#patch)

- patch(data: [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html)):Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#patch-1)





#### Parameters



- data: [UpdateDataSourceInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataSourceInstanceRequest.html)

#### Returns Promise< [DataSourceInstance](https://console.integration.app/ref/react/interfaces/DataSourceInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#archive-1)



#### Returns Promise<void>


### delete [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#delete)

- delete():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#delete-1)



#### Returns Promise<void>


### `Protected` getPath [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### setup [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#setup)

- setup():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#setup-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#reset)

- reset():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#reset-1)



#### Returns Promise<void>


### openConfiguration [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#openconfiguration)

- openConfiguration(

\_\_namedParameters?: [OpenDataSourceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenDataSourceConfigurationOptions.html),

):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#openconfiguration-1)





#### Parameters



- `Optional`\_\_namedParameters: [OpenDataSourceConfigurationOptions](https://console.integration.app/ref/react/interfaces/OpenDataSourceConfigurationOptions.html)

#### Returns Promise<void>

### unifiedFieldsToNative [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#unifiedfieldstonative)

- unifiedFieldsToNative(unifiedFields:any):Promise<any> [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#unifiedfieldstonative-1)





#### Parameters



- unifiedFields: any

#### Returns Promise<any>

### getCollection [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#getcollection)

- getCollection():Promise< [DataCollectionSpec](https://console.integration.app/ref/react/interfaces/DataCollectionSpec.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getcollection-1)



#### Returns Promise< [DataCollectionSpec](https://console.integration.app/ref/react/interfaces/DataCollectionSpec.html) >


### listRecords [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#listrecords)

- listRecords(

request?: [DataCollectionListRequest](https://console.integration.app/ref/react/interfaces/DataCollectionListRequest.html),

):Promise< [DataCollectionListResponse](https://console.integration.app/ref/react/interfaces/DataCollectionListResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#listrecords-1)





#### Parameters



- `Optional` request: [DataCollectionListRequest](https://console.integration.app/ref/react/interfaces/DataCollectionListRequest.html)

#### Returns Promise< [DataCollectionListResponse](https://console.integration.app/ref/react/interfaces/DataCollectionListResponse.html) >

### matchRecord [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#matchrecord)

- matchRecord(

request: [DataCollectionMatchRequest](https://console.integration.app/ref/react/interfaces/DataCollectionMatchRequest.html),

):Promise< [DataCollectionMatchResponse](https://console.integration.app/ref/react/interfaces/DataCollectionMatchResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#matchrecord-1)





#### Parameters



- request: [DataCollectionMatchRequest](https://console.integration.app/ref/react/interfaces/DataCollectionMatchRequest.html)

#### Returns Promise< [DataCollectionMatchResponse](https://console.integration.app/ref/react/interfaces/DataCollectionMatchResponse.html) >

### searchRecords [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#searchrecords)

- searchRecords(

request: [DataCollectionSearchRequest](https://console.integration.app/ref/react/interfaces/DataCollectionSearchRequest.html),

):Promise< [DataCollectionSearchResponse](https://console.integration.app/ref/react/interfaces/DataCollectionSearchResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#searchrecords-1)





#### Parameters



- request: [DataCollectionSearchRequest](https://console.integration.app/ref/react/interfaces/DataCollectionSearchRequest.html)

#### Returns Promise< [DataCollectionSearchResponse](https://console.integration.app/ref/react/interfaces/DataCollectionSearchResponse.html) >

### findRecordById [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#findrecordbyid)

- findRecordById(

request:string\| [DataCollectionFindByIdRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdRequest.html),

):Promise< [DataCollectionFindByIdResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#findrecordbyid-1)





#### Parameters



- request: string\| [DataCollectionFindByIdRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdRequest.html)

#### Returns Promise< [DataCollectionFindByIdResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdResponse.html) >

### createRecord [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#createrecord)

- createRecord(

request: [DataCollectionCreateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionCreateRequest.html),

):Promise< [DataCollectionCreateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionCreateResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#createrecord-1)





#### Parameters



- request: [DataCollectionCreateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionCreateRequest.html)

#### Returns Promise< [DataCollectionCreateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionCreateResponse.html) >

### updateRecord [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#updaterecord)

- updateRecord(

request: [DataCollectionUpdateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateRequest.html),

):Promise< [DataCollectionUpdateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#updaterecord-1)





#### Parameters



- request: [DataCollectionUpdateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateRequest.html)

#### Returns Promise< [DataCollectionUpdateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateResponse.html) >

### deleteRecord [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#deleterecord)

- deleteRecord(

request:string\| [DataCollectionFindByIdRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdRequest.html),

):Promise< [DataCollectionDeleteResponse](https://console.integration.app/ref/react/interfaces/DataCollectionDeleteResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#deleterecord-1)





#### Parameters



- request: string\| [DataCollectionFindByIdRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdRequest.html)

#### Returns Promise< [DataCollectionDeleteResponse](https://console.integration.app/ref/react/interfaces/DataCollectionDeleteResponse.html) >

### findRecords [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#findrecords)

- findRecords(

request?: [DataCollectionFindRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindRequest.html),

):Promise< [DataCollectionFindResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#findrecords-1)





#### Parameters



- `Optional` request: [DataCollectionFindRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindRequest.html)

#### Returns Promise< [DataCollectionFindResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindResponse.html) >

## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [DataSourceInstanceSelector](https://console.integration.app/ref/react/interfaces/DataSourceInstanceSelector.html);

type?: [WorkspaceElementType](https://console.integration.app/ref/react/enums/WorkspaceElementType.html);

}

### client [Permalink](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getpath) [setup](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#reset) [openConfiguration](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#openconfiguration) [unifiedFieldsToNative](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#unifiedfieldstonative) [getCollection](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#getcollection) [listRecords](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#listrecords) [matchRecord](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#matchrecord) [searchRecords](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#searchrecords) [findRecordById](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#findrecordbyid) [createRecord](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#createrecord) [updateRecord](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#updaterecord) [deleteRecord](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#deleterecord) [findRecords](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#findrecords)

Properties

[options](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#options) [client](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html#client)

MMNEPVFCICPMFPCPTTAAATR