---
url: "https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html"
title: "FieldMappingsAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [FieldMappingsAccessor](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html)

# Class FieldMappingsAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#FieldMappingsAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) <

[FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html),

[FindFieldMappingsQuery](https://console.integration.app/ref/react/interfaces/FindFieldMappingsQuery.html),

[CreateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingRequest.html),

>
  - FieldMappingsAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html\#constructor)

- newFieldMappingsAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

): [FieldMappingsAccessor](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#constructorfieldmappingsaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [FieldMappingsAccessor](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html\#find)

- find(query?: [FindFieldMappingsQuery](https://console.integration.app/ref/react/interfaces/FindFieldMappingsQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindFieldMappingsQuery](https://console.integration.app/ref/react/interfaces/FindFieldMappingsQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html\#findall)

- findAll(query?:Omit< [FindFieldMappingsQuery](https://console.integration.app/ref/react/interfaces/FindFieldMappingsQuery.html),"limit">):Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindFieldMappingsQuery](https://console.integration.app/ref/react/interfaces/FindFieldMappingsQuery.html),"limit">

#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html\#create)

- create(data: [CreateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingRequest.html)):Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#create-1)





#### Parameters



- data: [CreateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/CreateFieldMappingRequest.html)

#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR