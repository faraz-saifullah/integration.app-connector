---
url: "https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html"
title: "AppDataSchemaInstanceAccessor | Integration App React - v2.14.3"
---

- [Integration App React](https://console.integration.app/ref/react/index.html)
- [AppDataSchemaInstanceAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html)

# Class AppDataSchemaInstanceAccessor

#### Hierarchy ( [View Summary](https://console.integration.app/ref/react/hierarchy.html\#AppDataSchemaInstanceAccessor), Expand)

- [ElementInstanceAccessor](https://console.integration.app/ref/react/classes/ElementInstanceAccessor.html) <

[AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html),

[AppDataSchemaInstanceSelector](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstanceSelector.html),

[UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html),

[CreateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateAppDataSchemaInstanceRequest.html),

>
  - AppDataSchemaInstanceAccessor

##### Index

### Constructors

[constructor](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#constructor)

### Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getpath) [setup](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#setup)

### Properties

[options](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#options)

## Constructors

### constructor [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#constructor)

- newAppDataSchemaInstanceAccessor(

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html),

selector:string\| [AppDataSchemaInstanceSelector](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstanceSelector.html),

): [AppDataSchemaInstanceAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html) [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#constructorappdataschemainstanceaccessor)





#### Parameters



- client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html)
- selector: string\| [AppDataSchemaInstanceSelector](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstanceSelector.html)

#### Returns [AppDataSchemaInstanceAccessor](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html)

## Methods

### getUniqueIdentifier [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#getuniqueidentifier)

- getUniqueIdentifier():string [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getuniqueidentifier-1)



#### Returns string


### get [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#get)

- get():Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#get-1)



#### Returns Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) >


### getId [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#getid)

- getId():Promise<string> [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getid-1)



#### Returns Promise<string>


### create [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#create)

- create(

data?: [UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html),

):Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#create-1)





#### Parameters



- `Optional` data: [UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html)

#### Returns Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) >

### put [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#put)

- put(data: [UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html)):Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#put-1)





#### Parameters



- data: [UpdateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/UpdateAppDataSchemaInstanceRequest.html)

#### Returns Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) >

### patch [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#patch)

- patch(data: [CreateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateAppDataSchemaInstanceRequest.html)):Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) > [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#patch-1)





#### Parameters



- data: [CreateAppDataSchemaInstanceRequest](https://console.integration.app/ref/react/interfaces/CreateAppDataSchemaInstanceRequest.html)

#### Returns Promise< [AppDataSchemaInstance](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstance.html) >

### archive [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#archive)

- archive():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#archive-1)



#### Returns Promise<void>


### delete [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#delete)

- delete():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#delete-1)



#### Returns Promise<void>


### `Protected` getPath [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#getpath)

- getPath(operation?:string):string [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getpath-1)





#### Parameters



- `Optional` operation: string

#### Returns string

### setup [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#setup)

- setup():Promise<void> [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#setup-1)



#### Returns Promise<void>


## Properties

### `Protected` options [Permalink](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html\#options)

options:{

client: [IntegrationAppApiClient](https://console.integration.app/ref/react/classes/_integration-app_react.IntegrationAppApiClient.html);

instancePath:string;

selector:string\| [AppDataSchemaInstanceSelector](https://console.integration.app/ref/react/interfaces/AppDataSchemaInstanceSelector.html);

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

[constructor](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#constructor)

Methods

[getUniqueIdentifier](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getuniqueidentifier) [get](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#get) [getId](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getid) [create](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#create) [put](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#put) [patch](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#patch) [archive](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#archive) [delete](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#delete) [getPath](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#getpath) [setup](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#setup)

Properties

[options](https://console.integration.app/ref/react/classes/AppDataSchemaInstanceAccessor.html#options)

MMNEPVFCICPMFPCPTTAAATR