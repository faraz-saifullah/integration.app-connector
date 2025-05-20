---
url: "https://console.integration.app/ref/react/classes/DataSourcesAccessor.html"
title: "DataSourcesAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [DataSourcesAccessor](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html)

# Class DataSourcesAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#DataSourcesAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) < [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html), [FindDataSourcesQuery](https://console.integration.app/ref/react/interfaces/FindDataSourcesQuery.html), [CreateDataSourceRequest](https://console.integration.app/ref/react/types/CreateDataSourceRequest.html) >
  - DataSourcesAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html\#constructor)

- newDataSourcesAccessor(client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)): [DataSourcesAccessor](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#constructordatasourcesaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [DataSourcesAccessor](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html\#find)

- find(query?: [FindDataSourcesQuery](https://console.integration.app/ref/react/interfaces/FindDataSourcesQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >> [Permalink](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindDataSourcesQuery](https://console.integration.app/ref/react/interfaces/FindDataSourcesQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html\#findall)

- findAll(query?:Omit< [FindDataSourcesQuery](https://console.integration.app/ref/react/interfaces/FindDataSourcesQuery.html),"limit">):Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindDataSourcesQuery](https://console.integration.app/ref/react/interfaces/FindDataSourcesQuery.html),"limit">

#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html\#create)

- create(data: [CreateDataSourceRequest](https://console.integration.app/ref/react/types/CreateDataSourceRequest.html)):Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) > [Permalink](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#create-1)





#### Parameters



- data: [CreateDataSourceRequest](https://console.integration.app/ref/react/types/CreateDataSourceRequest.html)

#### Returns Promise< [DataSource](https://console.integration.app/ref/react/interfaces/DataSource.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/DataSourcesAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR