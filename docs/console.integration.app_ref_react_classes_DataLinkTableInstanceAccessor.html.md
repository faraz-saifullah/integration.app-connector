---
url: "https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html"
title: "DataLinkTableInstanceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [DataLinkTableInstanceAccessor](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html)

# Class DataLinkTableInstanceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#DataLinkTableInstanceAccessor), Expand)

- [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) <

[DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html),

[DataLinkTableInstanceSelector](https://console.integration.app/ref/react/interfaces/DataLinkTableInstanceSelector.html),

[UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html),

[UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html),

>
  - DataLinkTableInstanceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getpath) [findLinks](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#findlinks) [createLink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#createlink) [deleteLink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#deletelink)

### Properties

[options](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#constructor)

- newDataLinkTableInstanceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [DataLinkTableInstanceSelector](https://console.integration.app/ref/react/interfaces/DataLinkTableInstanceSelector.html),

): [DataLinkTableInstanceAccessor](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#constructordatalinktableinstanceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [DataLinkTableInstanceSelector](https://console.integration.app/ref/react/interfaces/DataLinkTableInstanceSelector.html)

#### Returns [DataLinkTableInstanceAccessor](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#get)

- get():Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#get-1)



#### Returns Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) >


### getId [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#getid)

- getId():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getid-1)



#### Returns Promise<string>


### create [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#create)

- create(

data?: [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html),

):Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#create-1)





#### Parameters



- `Optional` data: [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html)

#### Returns Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#put)

- put(data: [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html)):Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#put-1)





#### Parameters



- data: [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html)

#### Returns Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#patch)

- patch(data: [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html)):Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#patch-1)





#### Parameters



- data: [UpdateDataLinkTableInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateDataLinkTableInstanceRequest.html)

#### Returns Promise< [DataLinkTableInstance](https://console.integration.app/ref/react/interfaces/DataLinkTableInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#archive-1)



#### Returns Promise<void>


### delete [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#delete)

- delete():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#delete-1)



#### Returns Promise<void>


### `Protected` getPath [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### findLinks [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#findlinks)

- findLinks(query?: [FindDataLinksInTableQuery](https://console.integration.app/ref/react/interfaces/FindDataLinksInTableQuery.html)):Promise< [FindDataLinksResponse](https://console.integration.app/ref/react/interfaces/FindDataLinksResponse.html) > [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#findlinks-1)





#### Parameters



- `Optional` query: [FindDataLinksInTableQuery](https://console.integration.app/ref/react/interfaces/FindDataLinksInTableQuery.html)

#### Returns Promise< [FindDataLinksResponse](https://console.integration.app/ref/react/interfaces/FindDataLinksResponse.html) >

### createLink [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#createlink)

- createLink(data: [CreateDataLinkRequest](https://console.integration.app/ref/react/interfaces/CreateDataLinkRequest.html)):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#createlink-1)





#### Parameters



- data: [CreateDataLinkRequest](https://console.integration.app/ref/react/interfaces/CreateDataLinkRequest.html)

#### Returns Promise<void>

### deleteLink [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#deletelink)

- deleteLink(data: [DeleteDataLinkRequest](https://console.integration.app/ref/react/interfaces/DeleteDataLinkRequest.html)):Promise<void> [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#deletelink-1)





#### Parameters



- data: [DeleteDataLinkRequest](https://console.integration.app/ref/react/interfaces/DeleteDataLinkRequest.html)

#### Returns Promise<void>

## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [DataLinkTableInstanceSelector](https://console.integration.app/ref/react/interfaces/DataLinkTableInstanceSelector.html);

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

[constructor](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#getpath) [findLinks](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#findlinks) [createLink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#createlink) [deleteLink](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#deletelink)

Properties

[options](https://console.integration.app/ref/react/classes/DataLinkTableInstanceAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR