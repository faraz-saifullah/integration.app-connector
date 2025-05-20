---
url: "https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html"
title: "IntegrationLevelElementsListAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [@integration-app/react](https://console.integration.app/ref/react/modules/_integration-app_react.html)
- [IntegrationLevelElementsListAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html)

# Class IntegrationLevelElementsListAccessor<Element, Query, CreateElementData>

#### Type Parameters

- Element
- Query
- CreateElementData

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#@integration-app/react.IntegrationLevelElementsListAccessor))

- IntegrationLevelElementsListAccessor
  - [IntegrationLevelActionsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html)
  - [IntegrationLevelDataSourcesListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourcesListAccessor.html)
  - [IntegrationLevelFieldMappingsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html)
  - [IntegrationLevelFlowsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html)

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructor)

### Methods

[list](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#create)

### Properties

[client](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#integrationselector) [elementKey](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#endpoint)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#constructor)

- newIntegrationLevelElementsListAccessor< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorelement), [Query](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorquery), [CreateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorcreateelementdata) >(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

elementKey:string,

): [IntegrationLevelElementsListAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html) < [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorelement), [Query](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorquery), [CreateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorcreateelementdata) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessor)



#### Type Parameters



- Element
- Query
- CreateElementData

#### Parameters

- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string
- elementKey: string

#### Returns [IntegrationLevelElementsListAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html) < [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#constructorintegrationlevelelementslistaccessorelement), [Query](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#constructorintegrationlevelelementslistaccessorquery), [CreateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#constructorintegrationlevelelementslistaccessorcreateelementdata) >

## Methods

### list [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#list)

- list(query?: [Query](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorquery)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorelement) >> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#list-1)





#### Parameters



- `Optional` query: [Query](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorquery)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#constructorintegrationlevelelementslistaccessorelement) >>

### create [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#create)

- create(data: [CreateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorcreateelementdata)):Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#create-1)





#### Parameters



- data: [CreateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructorintegrationlevelelementslistaccessorcreateelementdata)

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#constructorintegrationlevelelementslistaccessorelement) >

## Properties

### `Protected` client [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### `Protected` integrationSelector [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#integrationselector)

integrationSelector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html\#endpoint)

endpoint:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#constructor)

Methods

[list](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#create)

Properties

[client](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#integrationselector) [elementKey](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html#endpoint)

MMNEPVFCICPMFPCPTTAAATR