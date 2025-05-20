---
url: "https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html"
title: "AppEventTypesAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [AppEventTypesAccessor](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html)

# Class AppEventTypesAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#AppEventTypesAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) <

[AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html),

[FindAppEventTypesQuery](https://console.integration.app/ref/react/interfaces/FindAppEventTypesQuery.html),

[CreateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/CreateAppEventTypeRequest.html),

>
  - AppEventTypesAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html\#constructor)

- newAppEventTypesAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

): [AppEventTypesAccessor](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#constructorappeventtypesaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [AppEventTypesAccessor](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html\#find)

- find(query?: [FindAppEventTypesQuery](https://console.integration.app/ref/react/interfaces/FindAppEventTypesQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html) >> [Permalink](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindAppEventTypesQuery](https://console.integration.app/ref/react/interfaces/FindAppEventTypesQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html\#findall)

- findAll(query?:Omit< [FindAppEventTypesQuery](https://console.integration.app/ref/react/interfaces/FindAppEventTypesQuery.html),"limit">):Promise< [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindAppEventTypesQuery](https://console.integration.app/ref/react/interfaces/FindAppEventTypesQuery.html),"limit">

#### Returns Promise< [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html\#create)

- create(data: [CreateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/CreateAppEventTypeRequest.html)):Promise< [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html) > [Permalink](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#create-1)





#### Parameters



- data: [CreateAppEventTypeRequest](https://console.integration.app/ref/react/interfaces/CreateAppEventTypeRequest.html)

#### Returns Promise< [AppEventType](https://console.integration.app/ref/react/interfaces/AppEventType.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR