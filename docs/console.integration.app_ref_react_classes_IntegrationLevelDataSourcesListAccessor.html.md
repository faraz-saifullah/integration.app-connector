---
url: "https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html"
title: "IntegrationLevelDataSourcesListAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationLevelDataSourcesListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html)

# Class IntegrationLevelDataSourcesListAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationLevelDataSourcesListAccessor), Expand)

- [IntegrationLevelElementsListAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html) <

[DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html),

[ListDataSourcesForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListDataSourcesForIntegrationQuery.html),

Omit< [CreateDataSourceRequest](https://console.integration.app/ref/react/types/CreateDataSourceRequest.html),"integrationId">,

>
  - IntegrationLevelDataSourcesListAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#constructor)

### Methods

[list](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#create)

### Properties

[elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#integrationselector)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html\#constructor)

- newIntegrationLevelDataSourcesListAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

): [IntegrationLevelDataSourcesListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#constructorintegrationleveldatasourceslistaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string

#### Returns [IntegrationLevelDataSourcesListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html)

## Methods

### list [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html\#list)

- list(

query?: [ListDataSourcesForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListDataSourcesForIntegrationQuery.html),

):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >> [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#list-1)





#### Parameters



- `Optional` query: [ListDataSourcesForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListDataSourcesForIntegrationQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >>

### create [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html\#create)

- create(data:Omit):Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#create-1)





#### Parameters



- data: Omit

#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >

## Properties

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### integrationSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html\#integrationselector)

integrationSelector:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#constructor)

Methods

[list](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#create)

Properties

[elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html#integrationselector)

MMNEPVFCICPMFPCPTTAAATR