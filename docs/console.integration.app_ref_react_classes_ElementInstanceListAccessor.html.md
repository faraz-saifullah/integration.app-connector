---
url: "https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html"
title: "ElementInstanceListAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ElementInstanceListAccessor](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html)

# Class ElementInstanceListAccessor<ElementInstance, FindQuery>

#### Type Parameters

- ElementInstance extends [BaseElementInstance](https://console.integration.app/ref/react/interfaces/BaseElementInstance.html)
- FindQuery

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ElementInstanceListAccessor))

- ElementInstanceListAccessor
  - [ActionInstancesAccessor](https://console.integration.app/ref/react/classes/ActionInstancesAccessor.html)
  - [AppDataSchemaInstancesAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaInstancesAccessor.html)
  - [AppEventSubscriptionsAccessor](https://console.integration.app/ref/react/classes/AppEventSubscriptionsAccessor.html)
  - [AppEventsAccessor](https://console.integration.app/ref/react/classes/AppEventsAccessor.html)
  - [ConnectionsAccessor](https://console.integration.app/ref/react/classes/ConnectionsAccessor.html)
  - [DataLinkTableInstancesAccessor](https://console.integration.app/ref/react/classes/DataLinkTableInstancesAccessor.html)
  - [DataSourceInstancesAccessor](https://console.integration.app/ref/react/classes/DataSourceInstancesAccessor.html)
  - [ExternalEventSubscriptionsAccessor](https://console.integration.app/ref/react/classes/ExternalEventSubscriptionsAccessor.html)
  - [FieldMappingInstancesAccessor](https://console.integration.app/ref/react/classes/FieldMappingInstancesAccessor.html)
  - [FlowInstancesAccessor](https://console.integration.app/ref/react/classes/FlowInstancesAccessor.html)

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#find)

### Properties

[client](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#client)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html\#constructor)

- newElementInstanceListAccessor<

[ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructorelementinstancelistaccessorelementinstance) extends [BaseElementInstance](https://console.integration.app/ref/react/interfaces/BaseElementInstance.html),

[FindQuery](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructorelementinstancelistaccessorfindquery),

>(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

path:string,

): [ElementInstanceListAccessor](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html) < [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructorelementinstancelistaccessorelementinstance), [FindQuery](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructorelementinstancelistaccessorfindquery) > [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructorelementinstancelistaccessor)



#### Type Parameters



- ElementInstance extends [BaseElementInstance](https://console.integration.app/ref/react/interfaces/BaseElementInstance.html)
- FindQuery

#### Parameters

- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- path: string

#### Returns [ElementInstanceListAccessor](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html) < [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html\#constructorelementinstancelistaccessorelementinstance), [FindQuery](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html\#constructorelementinstancelistaccessorfindquery) >

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html\#find)

- find(query?: [FindQuery](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructorelementinstancelistaccessorfindquery)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructorelementinstancelistaccessorelementinstance) >> [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindQuery](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructorelementinstancelistaccessorfindquery)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html\#constructorelementinstancelistaccessorelementinstance) >>

## Properties

### `Protected` client [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#find)

Properties

[client](https://console.integration.app/ref/react/classes/ElementInstanceListAccessor.html#client)

MMNEPVFCICPMFPCPTTAAATR