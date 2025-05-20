---
url: "https://console.integration.app/ref/react/classes/IntegrationsAccessor.html"
title: "IntegrationsAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationsAccessor](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html)

# Class IntegrationsAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationsAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) <

[Integration](https://console.integration.app/ref/react/interfaces/Integration.html),

[FindIntegrationsQuery](https://console.integration.app/ref/react/interfaces/FindIntegrationsQuery.html),

[CreateIntegrationRequest](https://console.integration.app/ref/react/interfaces/CreateIntegrationRequest.html),

>
  - IntegrationsAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html\#constructor)

- newIntegrationsAccessor(client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)): [IntegrationsAccessor](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#constructorintegrationsaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [IntegrationsAccessor](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html\#find)

- find(query?: [FindIntegrationsQuery](https://console.integration.app/ref/react/interfaces/FindIntegrationsQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >> [Permalink](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindIntegrationsQuery](https://console.integration.app/ref/react/interfaces/FindIntegrationsQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html\#findall)

- findAll(query?:Omit< [FindIntegrationsQuery](https://console.integration.app/ref/react/interfaces/FindIntegrationsQuery.html),"limit">):Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindIntegrationsQuery](https://console.integration.app/ref/react/interfaces/FindIntegrationsQuery.html),"limit">

#### Returns Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html\#create)

- create(data: [CreateIntegrationRequest](https://console.integration.app/ref/react/interfaces/CreateIntegrationRequest.html)):Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#create-1)





#### Parameters



- data: [CreateIntegrationRequest](https://console.integration.app/ref/react/interfaces/CreateIntegrationRequest.html)

#### Returns Promise< [Integration](https://console.integration.app/ref/react/interfaces/Integration.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/IntegrationsAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR