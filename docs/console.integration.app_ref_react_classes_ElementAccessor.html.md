---
url: "https://console.integration.app/ref/react/classes/ElementAccessor.html"
title: "ElementAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ElementAccessor](https://console.integration.app/ref/react/classes/ElementAccessor.html)

# Class ElementAccessor<Element, UpdateRequest, Selector>

#### Type Parameters

- Element
- UpdateRequest
- Selector extends [SelectorType](https://console.integration.app/ref/react/types/_integration-app_react.SelectorType.html) = string

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ElementAccessor))

- ElementAccessor
  - [ActionAccessor](https://console.integration.app/ref/react/classes/ActionAccessor.html)
  - [AppDataSchemaAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaAccessor.html)
  - [AppEventTypeAccessor](https://console.integration.app/ref/react/classes/AppEventTypeAccessor.html)
  - [CustomerAccessor](https://console.integration.app/ref/react/classes/CustomerAccessor.html)
  - [DataLinkTableAccessor](https://console.integration.app/ref/react/classes/DataLinkTableAccessor.html)
  - [DataSourceAccessor](https://console.integration.app/ref/react/classes/DataSourceAccessor.html)
  - [FieldMappingAccessor](https://console.integration.app/ref/react/classes/FieldMappingAccessor.html)
  - [FlowAccessor](https://console.integration.app/ref/react/classes/FlowAccessor.html)
  - [IntegrationAccessor](https://console.integration.app/ref/react/classes/IntegrationAccessor.html)
  - [ScenarioAccessor](https://console.integration.app/ref/react/classes/ScenarioAccessor.html)
  - [ScreenAccessor](https://console.integration.app/ref/react/classes/ScreenAccessor.html)

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/ElementAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ElementAccessor.html#get) [put](https://console.integration.app/ref/react/classes/ElementAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/ElementAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/ElementAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/ElementAccessor.html#getpath)

### Properties

[options](https://console.integration.app/ref/react/classes/ElementAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html\#constructor)

- newElementAccessor<

[Element](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorelement),

[UpdateRequest](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorupdaterequest),

[Selector](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorselector) extends [SelectorType](https://console.integration.app/ref/react/types/_integration-app_react.SelectorType.html) =string,

>(

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

path:string;

selector:string\| [Selector](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorselector);

},

): [ElementAccessor](https://console.integration.app/ref/react/classes/ElementAccessor.html) < [Element](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorelement), [UpdateRequest](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorupdaterequest), [Selector](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorselector) > [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessor)



#### Type Parameters



- Element
- UpdateRequest
- Selector extends [SelectorType](https://console.integration.app/ref/react/types/_integration-app_react.SelectorType.html) = string

#### Parameters

- options: {client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);path:string;selector:string\| [Selector](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorselector)}

#### Returns [ElementAccessor](https://console.integration.app/ref/react/classes/ElementAccessor.html) < [Element](https://console.integration.app/ref/react/classes/ElementAccessor.html\#constructorelementaccessorelement), [UpdateRequest](https://console.integration.app/ref/react/classes/ElementAccessor.html\#constructorelementaccessorupdaterequest), [Selector](https://console.integration.app/ref/react/classes/ElementAccessor.html\#constructorelementaccessorselector) >

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html\#get)

- get():Promise< [Element](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html#get-1)



#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/ElementAccessor.html\#constructorelementaccessorelement) >


### put [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html\#put)

- put(data: [UpdateRequest](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorupdaterequest)):Promise< [Element](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html#put-1)





#### Parameters



- data: [UpdateRequest](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorupdaterequest)

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/ElementAccessor.html\#constructorelementaccessorelement) >

### patch [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html\#patch)

- patch(data:Partial< [UpdateRequest](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorupdaterequest) >):Promise< [Element](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorelement) > [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html#patch-1)





#### Parameters



- data: Partial< [UpdateRequest](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorupdaterequest) >

#### Returns Promise< [Element](https://console.integration.app/ref/react/classes/ElementAccessor.html\#constructorelementaccessorelement) >

### archive [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html#archive-1)



#### Returns Promise<void>


### getPath [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/ElementAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

path:string;

selector:string\| [Selector](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructorelementaccessorselector);

}

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ElementAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/ElementAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ElementAccessor.html#get) [put](https://console.integration.app/ref/react/classes/ElementAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/ElementAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/ElementAccessor.html#archive) [getPath](https://console.integration.app/ref/react/classes/ElementAccessor.html#getpath)

Properties

[options](https://console.integration.app/ref/react/classes/ElementAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR