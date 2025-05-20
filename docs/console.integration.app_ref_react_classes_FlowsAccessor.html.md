---
url: "https://console.integration.app/ref/react/classes/FlowsAccessor.html"
title: "FlowsAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [FlowsAccessor](https://console.integration.app/ref/react/classes/FlowsAccessor.html)

# Class FlowsAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#FlowsAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) < [Flow](https://console.integration.app/ref/react/interfaces/Flow.html), [FindFlowsQuery](https://console.integration.app/ref/react/interfaces/FindFlowsQuery.html), [CreateFlowRequest](https://console.integration.app/ref/react/interfaces/CreateFlowRequest.html) >
  - FlowsAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/FlowsAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/FlowsAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/FlowsAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/FlowsAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/FlowsAccessor.html\#constructor)

- newFlowsAccessor(client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)): [FlowsAccessor](https://console.integration.app/ref/react/classes/FlowsAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/FlowsAccessor.html#constructorflowsaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [FlowsAccessor](https://console.integration.app/ref/react/classes/FlowsAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/FlowsAccessor.html\#find)

- find(query?: [FindFlowsQuery](https://console.integration.app/ref/react/interfaces/FindFlowsQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >> [Permalink](https://console.integration.app/ref/react/classes/FlowsAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindFlowsQuery](https://console.integration.app/ref/react/interfaces/FindFlowsQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/FlowsAccessor.html\#findall)

- findAll(query?:Omit< [FindFlowsQuery](https://console.integration.app/ref/react/interfaces/FindFlowsQuery.html),"limit">):Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/FlowsAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindFlowsQuery](https://console.integration.app/ref/react/interfaces/FindFlowsQuery.html),"limit">

#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/FlowsAccessor.html\#create)

- create(data: [CreateFlowRequest](https://console.integration.app/ref/react/interfaces/CreateFlowRequest.html)):Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) > [Permalink](https://console.integration.app/ref/react/classes/FlowsAccessor.html#create-1)





#### Parameters



- data: [CreateFlowRequest](https://console.integration.app/ref/react/interfaces/CreateFlowRequest.html)

#### Returns Promise< [Flow](https://console.integration.app/ref/react/interfaces/Flow.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/FlowsAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/FlowsAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/FlowsAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/FlowsAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR