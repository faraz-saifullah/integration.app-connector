---
url: "https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html"
title: "IntegrationLevelFlowsListAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationLevelFlowsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html)

# Class IntegrationLevelFlowsListAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationLevelFlowsListAccessor), Expand)

- [IntegrationLevelElementsListAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html) <

[Flow](https://console.integration.app/ref/react/interfaces/Flow.html),

[ListFlowsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListFlowsForIntegrationQuery.html),

Omit< [CreateFlowRequest](https://console.integration.app/ref/react/interfaces/CreateFlowRequest.html),"integrationId">,

>
  - IntegrationLevelFlowsListAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#constructor)

### Methods

[list](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#create)

### Properties

[elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#integrationselector)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html\#constructor)

- newIntegrationLevelFlowsListAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

): [IntegrationLevelFlowsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#constructorintegrationlevelflowslistaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string

#### Returns [IntegrationLevelFlowsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html)

## Methods

### list [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html\#list)

- list(query?: [ListFlowsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListFlowsForIntegrationQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >> [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#list-1)





#### Parameters



- `Optional` query: [ListFlowsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListFlowsForIntegrationQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >>

### create [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html\#create)

- create(data:Omit):Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#create-1)





#### Parameters



- data: Omit

#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >

## Properties

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### integrationSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html\#integrationselector)

integrationSelector:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#constructor)

Methods

[list](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#create)

Properties

[elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFlowsListAccessor.html#integrationselector)

MMNEPVFCICPMFPCPTTAAATR