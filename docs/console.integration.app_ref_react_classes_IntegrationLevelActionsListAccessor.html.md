---
url: "https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html"
title: "IntegrationLevelActionsListAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationLevelActionsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html)

# Class IntegrationLevelActionsListAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationLevelActionsListAccessor), Expand)

- [IntegrationLevelElementsListAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html) <

[Action](https://console.integration.app/ref/react/interfaces/Action.html),

[ListActionsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListActionsForIntegrationQuery.html),

Omit< [CreateActionRequest](https://console.integration.app/ref/react/types/CreateActionRequest.html),"integrationId">,

>
  - IntegrationLevelActionsListAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#constructor)

### Methods

[list](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#create)

### Properties

[elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#integrationselector)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html\#constructor)

- newIntegrationLevelActionsListAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

): [IntegrationLevelActionsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#constructorintegrationlevelactionslistaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string

#### Returns [IntegrationLevelActionsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html)

## Methods

### list [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html\#list)

- list(

query?: [ListActionsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListActionsForIntegrationQuery.html),

):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Action](https://console.integration.app/ref/react/interfaces/Action.html) >> [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#list-1)





#### Parameters



- `Optional` query: [ListActionsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListActionsForIntegrationQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Action](https://console.integration.app/ref/react/interfaces/Action.html) >>

### create [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html\#create)

- create(data:Omit):Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#create-1)





#### Parameters



- data: Omit

#### Returns Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) >

## Properties

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### integrationSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html\#integrationselector)

integrationSelector:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#constructor)

Methods

[list](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#create)

Properties

[elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelActionsListAccessor.html#integrationselector)

MMNEPVFCICPMFPCPTTAAATR