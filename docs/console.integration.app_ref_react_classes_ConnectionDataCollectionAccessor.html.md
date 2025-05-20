---
url: "https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html"
title: "ConnectionDataCollectionAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ConnectionDataCollectionAccessor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html)

# Class ConnectionDataCollectionAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#constructor)

### Methods

[get](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#get) [findById](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#findbyid) [list](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#list) [search](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#search) [match](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#match) [create](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#create) [update](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#update) [delete](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#delete)

### Properties

[client](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#client) [connectionAccessor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#connectionaccessor) [key](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#key) [parameters](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#parameters)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#constructor)

- newConnectionDataCollectionAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

connectionAccessor: [ConnectionAccessor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html),

key:string,

parameters:Record<string,any>,

): [ConnectionDataCollectionAccessor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#constructorconnectiondatacollectionaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- connectionAccessor: [ConnectionAccessor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html)
- key: string
- parameters: Record<string,any>

#### Returns [ConnectionDataCollectionAccessor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html)

## Methods

### get [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#get)

- get():Promise< [DataCollectionSpec](https://console.integration.app/ref/react/interfaces/DataCollectionSpec.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#get-1)



#### Returns Promise< [DataCollectionSpec](https://console.integration.app/ref/react/interfaces/DataCollectionSpec.html) >


### findById [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#findbyid)

- findById(

request?: [DataCollectionFindByIdRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdRequest.html),

):Promise< [DataCollectionFindByIdResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#findbyid-1)





#### Parameters



- `Optional` request: [DataCollectionFindByIdRequest](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdRequest.html)

#### Returns Promise< [DataCollectionFindByIdResponse](https://console.integration.app/ref/react/interfaces/DataCollectionFindByIdResponse.html) >

### list [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#list)

- list(request?: [DataCollectionListRequest](https://console.integration.app/ref/react/interfaces/DataCollectionListRequest.html)):Promise< [DataCollectionListResponse](https://console.integration.app/ref/react/interfaces/DataCollectionListResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#list-1)





#### Parameters



- `Optional` request: [DataCollectionListRequest](https://console.integration.app/ref/react/interfaces/DataCollectionListRequest.html)

#### Returns Promise< [DataCollectionListResponse](https://console.integration.app/ref/react/interfaces/DataCollectionListResponse.html) >

### search [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#search)

- search(

request?: [DataCollectionSearchRequest](https://console.integration.app/ref/react/interfaces/DataCollectionSearchRequest.html),

):Promise< [DataCollectionSearchResponse](https://console.integration.app/ref/react/interfaces/DataCollectionSearchResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#search-1)





#### Parameters



- `Optional` request: [DataCollectionSearchRequest](https://console.integration.app/ref/react/interfaces/DataCollectionSearchRequest.html)

#### Returns Promise< [DataCollectionSearchResponse](https://console.integration.app/ref/react/interfaces/DataCollectionSearchResponse.html) >

### match [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#match)

- match(

request?: [DataCollectionMatchRequest](https://console.integration.app/ref/react/interfaces/DataCollectionMatchRequest.html),

):Promise< [DataCollectionMatchResponse](https://console.integration.app/ref/react/interfaces/DataCollectionMatchResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#match-1)





#### Parameters



- `Optional` request: [DataCollectionMatchRequest](https://console.integration.app/ref/react/interfaces/DataCollectionMatchRequest.html)

#### Returns Promise< [DataCollectionMatchResponse](https://console.integration.app/ref/react/interfaces/DataCollectionMatchResponse.html) >

### create [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#create)

- create(

request?: [DataCollectionCreateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionCreateRequest.html),

):Promise< [DataCollectionCreateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionCreateResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#create-1)





#### Parameters



- `Optional` request: [DataCollectionCreateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionCreateRequest.html)

#### Returns Promise< [DataCollectionCreateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionCreateResponse.html) >

### update [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#update)

- update(

request?: [DataCollectionUpdateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateRequest.html),

):Promise< [DataCollectionUpdateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#update-1)





#### Parameters



- `Optional` request: [DataCollectionUpdateRequest](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateRequest.html)

#### Returns Promise< [DataCollectionUpdateResponse](https://console.integration.app/ref/react/interfaces/DataCollectionUpdateResponse.html) >

### delete [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#delete)

- delete(

request?: [DataCollectionDeleteRequest](https://console.integration.app/ref/react/interfaces/DataCollectionDeleteRequest.html),

):Promise< [DataCollectionDeleteResponse](https://console.integration.app/ref/react/interfaces/DataCollectionDeleteResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#delete-1)





#### Parameters



- `Optional` request: [DataCollectionDeleteRequest](https://console.integration.app/ref/react/interfaces/DataCollectionDeleteRequest.html)

#### Returns Promise< [DataCollectionDeleteResponse](https://console.integration.app/ref/react/interfaces/DataCollectionDeleteResponse.html) >

## Properties

### client [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### connectionAccessor [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#connectionaccessor)

connectionAccessor: [ConnectionAccessor](https://console.integration.app/ref/react/classes/ConnectionAccessor.html)

### key [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#key)

key:string

### parameters [Permalink](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html\#parameters)

parameters:Record<string,any>

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#constructor)

Methods

[get](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#get) [findById](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#findbyid) [list](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#list) [search](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#search) [match](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#match) [create](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#create) [update](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#update) [delete](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#delete)

Properties

[client](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#client) [connectionAccessor](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#connectionaccessor) [key](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#key) [parameters](https://console.integration.app/ref/react/classes/ConnectionDataCollectionAccessor.html#parameters)

MMNEPVFCICPMFPCPTTAAATR