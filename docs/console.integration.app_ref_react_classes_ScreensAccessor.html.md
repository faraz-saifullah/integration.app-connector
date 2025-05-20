---
url: "https://console.integration.app/ref/react/classes/ScreensAccessor.html"
title: "ScreensAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ScreensAccessor](https://console.integration.app/ref/react/classes/ScreensAccessor.html)

# Class ScreensAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ScreensAccessor), Expand)

- [ElementListAccessor](https://console.integration.app/ref/react/classes/ElementListAccessor.html) < [Screen](https://console.integration.app/ref/react/interfaces/Screen.html), [FindScreensQuery](https://console.integration.app/ref/react/interfaces/FindScreensQuery.html), [CreateScreenRequest](https://console.integration.app/ref/react/interfaces/CreateScreenRequest.html) >
  - ScreensAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ScreensAccessor.html#constructor)

### Methods

[find](https://console.integration.app/ref/react/classes/ScreensAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/ScreensAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/ScreensAccessor.html#create)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ScreensAccessor.html\#constructor)

- newScreensAccessor(client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)): [ScreensAccessor](https://console.integration.app/ref/react/classes/ScreensAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/ScreensAccessor.html#constructorscreensaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

#### Returns [ScreensAccessor](https://console.integration.app/ref/react/classes/ScreensAccessor.html)

## Methods

### find [Permalink](https://console.integration.app/ref/react/classes/ScreensAccessor.html\#find)

- find(query?: [FindScreensQuery](https://console.integration.app/ref/react/interfaces/FindScreensQuery.html)):Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Screen](https://console.integration.app/ref/react/interfaces/Screen.html) >> [Permalink](https://console.integration.app/ref/react/classes/ScreensAccessor.html#find-1)





#### Parameters



- `Optional` query: [FindScreensQuery](https://console.integration.app/ref/react/interfaces/FindScreensQuery.html)

#### Returns Promise< [PaginationResponse](https://console.integration.app/ref/react/classes/PaginationResponse.html) < [Screen](https://console.integration.app/ref/react/interfaces/Screen.html) >>

### findAll [Permalink](https://console.integration.app/ref/react/classes/ScreensAccessor.html\#findall)

- findAll(query?:Omit< [FindScreensQuery](https://console.integration.app/ref/react/interfaces/FindScreensQuery.html),"limit">):Promise< [Screen](https://console.integration.app/ref/react/interfaces/Screen.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/ScreensAccessor.html#findall-1)





#### Parameters



- `Optional` query: Omit< [FindScreensQuery](https://console.integration.app/ref/react/interfaces/FindScreensQuery.html),"limit">

#### Returns Promise< [Screen](https://console.integration.app/ref/react/interfaces/Screen.html)\[\]>

### create [Permalink](https://console.integration.app/ref/react/classes/ScreensAccessor.html\#create)

- create(data: [CreateScreenRequest](https://console.integration.app/ref/react/interfaces/CreateScreenRequest.html)):Promise< [Screen](https://console.integration.app/ref/react/interfaces/Screen.html) > [Permalink](https://console.integration.app/ref/react/classes/ScreensAccessor.html#create-1)





#### Parameters



- data: [CreateScreenRequest](https://console.integration.app/ref/react/interfaces/CreateScreenRequest.html)

#### Returns Promise< [Screen](https://console.integration.app/ref/react/interfaces/Screen.html) >

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ScreensAccessor.html#constructor)

Methods

[find](https://console.integration.app/ref/react/classes/ScreensAccessor.html#find) [findAll](https://console.integration.app/ref/react/classes/ScreensAccessor.html#findall) [create](https://console.integration.app/ref/react/classes/ScreensAccessor.html#create)

MMNEPVFCICPMFPCPTTAAATR