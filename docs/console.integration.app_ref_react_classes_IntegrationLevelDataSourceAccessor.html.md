---
url: "https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html"
title: "IntegrationLevelDataSourceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html)

# Class IntegrationLevelDataSourceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationLevelDataSourceAccessor), Expand)

- [IntegrationLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html) < [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html), [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html) >
  - IntegrationLevelDataSourceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#reset)

### Properties

[elementSelector](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#elementselector) [elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#integrationselector) [dataSourceSelector](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#datasourceselector)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#constructor)

- newIntegrationLevelDataSourceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

dataSourceSelector:string,

): [IntegrationLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#constructorintegrationleveldatasourceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string
- dataSourceSelector: string

#### Returns [IntegrationLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#get)

- get():Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#get-1)



#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >


### patch [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#patch)

- patch(data:Partial< [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html) >):Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html) >

#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#put)

- put(data: [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html)):Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#put-1)





#### Parameters



- data: [UpdateDataSourceRequest](https://console.integration.app/ref/react/types/UpdateDataSourceRequest.html)

#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#reset)

- reset():Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#reset-1)



#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >


## Properties

### `Protected` elementSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#elementselector)

elementSelector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### integrationSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#integrationselector)

integrationSelector:string

### dataSourceSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html\#datasourceselector)

dataSourceSelector:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#reset)

Properties

[elementSelector](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#elementselector) [elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#integrationselector) [dataSourceSelector](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html#datasourceselector)

MMNEPVFCICPMFPCPTTAAATR