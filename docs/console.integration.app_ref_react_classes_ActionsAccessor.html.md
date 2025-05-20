---
url: "https://console.integration.app/ref/react/classes/ActionsAccessor.html"
title: "ActionsAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ActionsAccessor](https://console.integration.app/ref/react/classes/ActionsAccessor.html)

# Class ActionsAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ActionsAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) < [Action](https://console.integration.app/ref/react/interfaces/Action.html), [FindActionsQuery](https://console.integration.app/ref/react/interfaces/FindActionsQuery.html), [CreateActionRequest](https://console.integration.app/ref/react/types/CreateActionRequest.html) >
  - ActionsAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ActionsAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/ActionsAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/ActionsAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/ActionsAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ActionsAccessor.html\#constructor)

- newActionsAccessor(client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)): [ActionsAccessor](https://console.integration.app/ref/react/classes/ActionsAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ActionsAccessor.html#constructoractionsaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [ActionsAccessor](https://console.integration.app/ref/react/classes/ActionsAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/ActionsAccessor.html\#find)

- find(query?: [FindActionsQuery](https://console.integration.app/ref/react/interfaces/FindActionsQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Action](https://console.integration.app/ref/react/interfaces/Action.html) >> [Permalink](https://console.integration.app/ref/react/classes/ActionsAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindActionsQuery](https://console.integration.app/ref/react/interfaces/FindActionsQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Action](https://console.integration.app/ref/react/interfaces/Action.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/ActionsAccessor.html\#findall)

- findAll(query?:Omit< [FindActionsQuery](https://console.integration.app/ref/react/interfaces/FindActionsQuery.html),"limit">):Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/ActionsAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindActionsQuery](https://console.integration.app/ref/react/interfaces/FindActionsQuery.html),"limit">

#### Returns Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/ActionsAccessor.html\#create)

- create(data: [CreateActionRequest](https://console.integration.app/ref/react/types/CreateActionRequest.html)):Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) > [Permalink](https://console.integration.app/ref/react/classes/ActionsAccessor.html#create-1)





#### Parameters



- data: [CreateActionRequest](https://console.integration.app/ref/react/types/CreateActionRequest.html)

#### Returns Promise< [Action](https://console.integration.app/ref/react/interfaces/Action.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ActionsAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/ActionsAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/ActionsAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/ActionsAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR