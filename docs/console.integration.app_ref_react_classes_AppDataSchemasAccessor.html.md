---
url: "https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html"
title: "AppDataSchemasAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [AppDataSchemasAccessor](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html)

# Class AppDataSchemasAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#AppDataSchemasAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) <

[AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html),

[FindAppDataSchemasQuery](https://console.integration.app/ref/react/interfaces/FindAppDataSchemasQuery.html),

[CreateAppDataSchemaRequest](https://console.integration.app/ref/react/types/CreateAppDataSchemaRequest.html),

>
  - AppDataSchemasAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html\#constructor)

- newAppDataSchemasAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

): [AppDataSchemasAccessor](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#constructorappdataschemasaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [AppDataSchemasAccessor](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html\#find)

- find(

query?: [FindAppDataSchemasQuery](https://console.integration.app/ref/react/interfaces/FindAppDataSchemasQuery.html),

):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html) >> [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindAppDataSchemasQuery](https://console.integration.app/ref/react/interfaces/FindAppDataSchemasQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html\#findall)

- findAll(

query?:Omit< [FindAppDataSchemasQuery](https://console.integration.app/ref/react/interfaces/FindAppDataSchemasQuery.html),"limit">,

):Promise< [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindAppDataSchemasQuery](https://console.integration.app/ref/react/interfaces/FindAppDataSchemasQuery.html),"limit">

#### Returns Promise< [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html\#create)

- create(data: [CreateAppDataSchemaRequest](https://console.integration.app/ref/react/types/CreateAppDataSchemaRequest.html)):Promise< [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html) > [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#create-1)





#### Parameters



- data: [CreateAppDataSchemaRequest](https://console.integration.app/ref/react/types/CreateAppDataSchemaRequest.html)

#### Returns Promise< [AppDataSchema](https://console.integration.app/ref/react/interfaces/AppDataSchema.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/AppDataSchemasAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR