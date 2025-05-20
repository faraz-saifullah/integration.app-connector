---
url: "https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html"
title: "DataLinkTablesAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [DataLinkTablesAccessor](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html)

# Class DataLinkTablesAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#DataLinkTablesAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) <

[DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html),

[FindDataLinkTablesQuery](https://console.integration.app/ref/react/interfaces/FindDataLinkTablesQuery.html),

[CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html),

>
  - DataLinkTablesAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html\#constructor)

- newDataLinkTablesAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

): [DataLinkTablesAccessor](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#constructordatalinktablesaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [DataLinkTablesAccessor](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html\#find)

- find(

query?: [FindDataLinkTablesQuery](https://console.integration.app/ref/react/interfaces/FindDataLinkTablesQuery.html),

):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html) >> [Permalink](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindDataLinkTablesQuery](https://console.integration.app/ref/react/interfaces/FindDataLinkTablesQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html\#findall)

- findAll(

query?:Omit< [FindDataLinkTablesQuery](https://console.integration.app/ref/react/interfaces/FindDataLinkTablesQuery.html),"limit">,

):Promise< [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindDataLinkTablesQuery](https://console.integration.app/ref/react/interfaces/FindDataLinkTablesQuery.html),"limit">

#### Returns Promise< [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html\#create)

- create(data: [CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html)):Promise< [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html) > [Permalink](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#create-1)





#### Parameters



- data: [CreateDataLinkTableRequest](https://console.integration.app/ref/react/types/CreateDataLinkTableRequest.html)

#### Returns Promise< [DataLinkTable](https://console.integration.app/ref/react/interfaces/DataLinkTable.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/DataLinkTablesAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR