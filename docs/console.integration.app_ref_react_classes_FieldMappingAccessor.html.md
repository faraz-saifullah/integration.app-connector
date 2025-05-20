---
url: "https://console.integration.app/ref/react/classes/FieldMappingAccessor.html"
title: "FieldMappingAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [FieldMappingAccessor](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html)

# Class FieldMappingAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#FieldMappingAccessor), Expand)

- [ElementAccessor](https://console.integration.app/ref/react/classes/ElementAccessor.html) < [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html), [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html), [FieldMappingSelector](https://console.integration.app/ref/react/interfaces/FieldMappingSelector.html) >
  - FieldMappingAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#get) [put](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getpath) [getAppSchema](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getappschema) [apply](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#apply) [setup](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#reset)

### Properties

[options](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#constructor)

- newFieldMappingAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [FieldMappingSelector](https://console.integration.app/ref/react/interfaces/FieldMappingSelector.html),

): [FieldMappingAccessor](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#constructorfieldmappingaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [FieldMappingSelector](https://console.integration.app/ref/react/interfaces/FieldMappingSelector.html)

#### Returns [FieldMappingAccessor](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#get)

- get():Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#get-1)



#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >


### put [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#put)

- put(data: [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html)):Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#put-1)





#### Parameters



- data: [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html)

#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#patch)

- patch(data:Partial< [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html) >):Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) > [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateFieldMappingRequest](https://console.integration.app/ref/react/interfaces/UpdateFieldMappingRequest.html) >

#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#archive-1)



#### Returns Promise<void>


### getPath [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### getAppSchema [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#getappschema)

- getAppSchema():Promise<any> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getappschema-1)



#### Returns Promise<any>


### apply [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#apply)

- apply(integrationKeys:string\[\]):Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html)\[\]> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#apply-1)





#### Parameters



- integrationKeys: string\[\]

#### Returns Promise< [FieldMapping](https://console.integration.app/ref/react/interfaces/FieldMapping.html)\[\]>

### setup [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#setup)

- setup():Promise<any> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#setup-1)



#### Returns Promise<any>


### reset [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#reset)

- reset():Promise<any> [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#reset-1)



#### Returns Promise<any>


## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

path:string;

selector:string\| [FieldMappingSelector](https://console.integration.app/ref/react/interfaces/FieldMappingSelector.html);

}

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#get) [put](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getpath) [getAppSchema](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#getappschema) [apply](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#apply) [setup](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#setup) [reset](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#reset)

Properties

[options](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR