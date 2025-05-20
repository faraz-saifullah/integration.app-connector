---
url: "https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html"
title: "IntegrationLevelElementAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [@integration-app/react](https://console.integration.app/ref/react/modules/_integration-app_react.html)
- [IntegrationLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html)

# Class IntegrationLevelElementAccessor<Element, UpdateElementData>

#### Type Parameters

- Element
- UpdateElementData

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#@integration-app/react.IntegrationLevelElementAccessor))

- IntegrationLevelElementAccessor
  - [IntegrationLevelActionAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelActionAccessor.html)
  - [IntegrationLevelDataSourceAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelDataSourceAccessor.html)
  - [IntegrationLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html)
  - [IntegrationLevelFlowAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFlowAccessor.html)

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#reset)

### Properties

[client](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#integrationselector) [elementSelector](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#elementselector) [elementKey](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#endpoint)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#constructor)

- newIntegrationLevelElementAccessor< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorelement), [UpdateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorupdateelementdata) >(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

elementSelector:string,

elementKey:string,

): [IntegrationLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html) < [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorelement), [UpdateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorupdateelementdata) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessor)



#### Type Parameters



- Element
- UpdateElementData

#### Parameters

- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string
- elementSelector: string
- elementKey: string

#### Returns [IntegrationLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html) < [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#constructorintegrationlevelelementaccessorelement), [UpdateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#constructorintegrationlevelelementaccessorupdateelementdata) >

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#get)

- get():Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#get-1)



#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#constructorintegrationlevelelementaccessorelement) >


### patch [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#patch)

- patch(data:Partial< [UpdateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorupdateelementdata) >):Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorupdateelementdata) >

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#constructorintegrationlevelelementaccessorelement) >

### put [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#put)

- put(data: [UpdateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorupdateelementdata)):Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#put-1)





#### Parameters



- data: [UpdateElementData](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorupdateelementdata)

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#constructorintegrationlevelelementaccessorelement) >

### archive [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#reset)

- reset():Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructorintegrationlevelelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#reset-1)



#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#constructorintegrationlevelelementaccessorelement) >


## Properties

### `Protected` client [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### `Protected` integrationSelector [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#integrationselector)

integrationSelector:string

### `Protected` elementSelector [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#elementselector)

elementSelector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html\#endpoint)

endpoint:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#reset)

Properties

[client](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#integrationselector) [elementSelector](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#elementselector) [elementKey](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html#endpoint)

MMNEPVFCICPMFPCPTTAAATR