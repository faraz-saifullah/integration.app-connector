---
url: "https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html"
title: "IntegrationLevelFieldMappingsListAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationLevelFieldMappingsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html)

# Class IntegrationLevelFieldMappingsListAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationLevelFieldMappingsListAccessor), Expand)

- [IntegrationLevelElementsListAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementsListAccessor.html) <

[FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html),

[ListFieldMappingsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListFieldMappingsForIntegrationQuery.html),

Omit< [CreateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingRequest.html),"integrationId">,

>
  - IntegrationLevelFieldMappingsListAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#constructor)

### Methods

[list](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#create)

### Properties

[elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#integrationselector)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html\#constructor)

- newIntegrationLevelFieldMappingsListAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

): [IntegrationLevelFieldMappingsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#constructorintegrationlevelfieldmappingslistaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string

#### Returns [IntegrationLevelFieldMappingsListAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html)

## Methods

### list [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html\#list)

- list(

query?: [ListFieldMappingsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListFieldMappingsForIntegrationQuery.html),

):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >> [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#list-1)





#### Parameters



- `Optional` query: [ListFieldMappingsForIntegrationQuery](https://console.integration.app/ref/react/interfaces/ListFieldMappingsForIntegrationQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >>

### create [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html\#create)

- create(data:Omit):Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#create-1)





#### Parameters



- data: Omit

#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >

## Properties

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### integrationSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html\#integrationselector)

integrationSelector:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#constructor)

Methods

[list](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#list) [create](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#create)

Properties

[elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingsListAccessor.html#integrationselector)

MMNEPVFCICPMFPCPTTAAATR