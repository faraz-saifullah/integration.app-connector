---
url: "https://console.integration.app/ref/react/classes/ElementListAccessor.html"
title: "ElementListAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html)

# Class ElementListAccessor<Element, FindQuery, CreateRequest>

#### Type Parameters

- Element
- FindQuery
- CreateRequest

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ElementListAccessor))

- ElementListAccessor
  - [ActionsAccessor](https://console.integration.app/ref/react/classes/ActionsAccessor.html)
  - [AppDataSchemasAccessor](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html)
  - [AppEventTypesAccessor](https://console.integration.app/ref/react/classes/AppEventTypesAccessor.html)
  - [CustomersAccessor](https://console.integration.app/ref/react/classes/CustomersAccessor.html)
  - [DataLinkTablesAccessor](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html)
  - [DataSourcesAccessor](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html)
  - [FieldMappingsAccessor](https://console.integration.app/ref/react/classes/FieldMappingsAccessor.html)
  - [FlowsAccessor](https://console.integration.app/ref/react/classes/FlowsAccessor.html)
  - [IntegrationsAccessor](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html)
  - [ScenariosAccessor](https://console.integration.app/ref/react/classes/ScenariosAccessor.html)
  - [ScreensAccessor](https://console.integration.app/ref/react/classes/ScreensAccessor.html)

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/ElementListAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/ElementListAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/ElementListAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#constructor)

- newElementListAccessor< [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorelement), [FindQuery](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorfindquery), [CreateRequest](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorcreaterequest) >(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

path:string,

): [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) < [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorelement), [FindQuery](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorfindquery), [CreateRequest](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorcreaterequest) > [Permalink](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessor)



#### Type Parameters



- Element
- FindQuery
- CreateRequest

#### Parameters

- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- path: string

#### Returns [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) < [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#constructorelementlistaccessorelement), [FindQuery](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#constructorelementlistaccessorfindquery), [CreateRequest](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#constructorelementlistaccessorcreaterequest) >

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#find)

- find(query?: [FindQuery](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorfindquery)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorelement) >> [Permalink](https://console.integration.app/ref/react/classes/ElementListAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindQuery](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorfindquery)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#constructorelementlistaccessorelement) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#findall)

- findAll(query?:Omit< [FindQuery](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorfindquery),"limit">):Promise< [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorelement)\[\]> [Permalink](https://console.integration.app/ref/react/classes/ElementListAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindQuery](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorfindquery),"limit">

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#constructorelementlistaccessorelement)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#create)

- create(data: [CreateRequest](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorcreaterequest)):Promise< [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/ElementListAccessor.html#create-1)





#### Parameters



- data: [CreateRequest](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructorelementlistaccessorcreaterequest)

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/ElementListAccessor.html\#constructorelementlistaccessorelement) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ElementListAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/ElementListAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/ElementListAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/ElementListAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR