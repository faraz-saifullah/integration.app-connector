---
url: "https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html"
title: "ElementInstanceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html)

# Class ElementInstanceAccessor<ElementInstance, Selector, CreateRequest, UpdateRequest>

#### Type Parameters

- ElementInstance extends [BaseElementInstance](https://console.integration.app/ref/react/interfaces/BaseElementInstance.html)
- Selector extends {id?:string}
- CreateRequest
- UpdateRequest

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#ElementInstanceAccessor))

- ElementInstanceAccessor
  - [ActionInstanceAccessor](https://console.integration.app/ref/react/classes/ActionInstanceAccessor.html)
  - [AppDataSchemaInstanceAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html)
  - [AppEventSubscriptionAccessor](https://console.integration.app/ref/react/classes/AppEventSubscriptionAccessor.html)
  - [DataLinkTableInstanceAccessor](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html)
  - [DataSourceInstanceAccessor](https://console.integration.app/ref/react/classes/DataSourceInstanceAccessor.html)
  - [FieldMappingInstanceAccessor](https://console.integration.app/ref/react/classes/FieldMappingInstanceAccessor.html)
  - [FlowInstanceAccessor](https://console.integration.app/ref/react/classes/FlowInstanceAccessor.html)

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getpath)

### Properties

[options](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructor)

- newElementInstanceAccessor<

[ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorelementinstance) extends [BaseElementInstance](https://console.integration.app/ref/react/interfaces/BaseElementInstance.html),

[Selector](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorselector) extends{id?:string},

[CreateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorcreaterequest),

[UpdateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorupdaterequest),

>(

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [Selector](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorselector);

type?: [WorkspaceElementType](https://console.integration.app/ref/react/enums/WorkspaceElementType.html);

},

): [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) <

[ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorelementinstance),

[Selector](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorselector),

[CreateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorcreaterequest),

[UpdateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorupdaterequest),

> [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessor)



#### Type Parameters



- ElementInstance extends [BaseElementInstance](https://console.integration.app/ref/react/interfaces/BaseElementInstance.html)
- Selector extends {id?:string}
- CreateRequest
- UpdateRequest

#### Parameters

- options: {

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [Selector](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorselector);

type?: [WorkspaceElementType](https://console.integration.app/ref/react/enums/WorkspaceElementType.html);

}

#### Returns [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) < [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructorelementinstanceaccessorelementinstance), [Selector](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructorelementinstanceaccessorselector), [CreateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructorelementinstanceaccessorcreaterequest), [UpdateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructorelementinstanceaccessorupdaterequest) >

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#get)

- get():Promise< [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorelementinstance) > [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#get-1)



#### Returns Promise< [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructorelementinstanceaccessorelementinstance) >


### getId [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#getid)

- getId():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getid-1)



#### Returns Promise<string>


### create [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#create)

- create(data?: [CreateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorcreaterequest)):Promise< [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorelementinstance) > [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#create-1)





#### Parameters



- `Optional` data: [CreateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorcreaterequest)

#### Returns Promise< [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructorelementinstanceaccessorelementinstance) >

### put [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#put)

- put(data: [CreateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorcreaterequest)):Promise< [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorelementinstance) > [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#put-1)





#### Parameters



- data: [CreateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorcreaterequest)

#### Returns Promise< [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructorelementinstanceaccessorelementinstance) >

### patch [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#patch)

- patch(data: [UpdateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorupdaterequest)):Promise< [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorelementinstance) > [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#patch-1)





#### Parameters



- data: [UpdateRequest](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorupdaterequest)

#### Returns Promise< [ElementInstance](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#constructorelementinstanceaccessorelementinstance) >

### archive [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#archive-1)



#### Returns Promise<void>


### delete [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#delete)

- delete():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#delete-1)



#### Returns Promise<void>


### `Protected` getPath [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [Selector](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructorelementinstanceaccessorselector);

type?: [WorkspaceElementType](https://console.integration.app/ref/react/enums/WorkspaceElementType.html);

}

### Settings

Member Visibility

- Protected
- Inherited
- External

ThemeOSLightDark

### On This Page

Constructors

[constructor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#getpath)

Properties

[options](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR