---
url: "https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html"
title: "IntegrationLevelFieldMappingAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [IntegrationLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html)

# Class IntegrationLevelFieldMappingAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#IntegrationLevelFieldMappingAccessor), Expand)

- [IntegrationLevelElementAccessor](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationLevelElementAccessor.html) < [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html), [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html) >
  - IntegrationLevelFieldMappingAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#reset)

### Properties

[elementSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#elementselector) [elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#integrationselector) [fieldMappingSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#fieldmappingselector)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#constructor)

- newIntegrationLevelFieldMappingAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

integrationSelector:string,

fieldMappingSelector:string,

): [IntegrationLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#constructorintegrationlevelfieldmappingaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- integrationSelector: string
- fieldMappingSelector: string

#### Returns [IntegrationLevelFieldMappingAccessor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#get)

- get():Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#get-1)



#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >


### patch [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#patch)

- patch(data:Partial< [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html) >):Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html) >

#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#put)

- put(data: [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html)):Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#put-1)





#### Parameters



- data: [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html)

#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#archive-1)



#### Returns Promise<void>


### reset [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#reset)

- reset():Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#reset-1)



#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >


## Properties

### `Protected` elementSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#elementselector)

elementSelector:string

### `Protected` elementKey [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#elementkey)

elementKey:string

### `Protected` endpoint [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#endpoint)

endpoint:string

### client [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#client)

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)

### integrationSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#integrationselector)

integrationSelector:string

### fieldMappingSelector [Permalink](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html\#fieldmappingselector)

fieldMappingSelector:string

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#get) [patch](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#patch) [put](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#put) [archive](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#archive) [reset](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#reset)

Properties

[elementSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#elementselector) [elementKey](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#elementkey) [endpoint](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#endpoint) [client](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#client) [integrationSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#integrationselector) [fieldMappingSelector](https://console.integration.app/ref/react/classes/IntegrationLevelFieldMappingAccessor.html#fieldmappingselector)

MMNEPVFCICPMFPCPTTAAATR